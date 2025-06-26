import { Enum } from 'protobufjs/light';
import { validate, validated } from './Symbols';

function addInstanceof(Type) {
  // This lets `message instanceof Type` work
  Type[Symbol.hasInstance] = (instance) => instance instanceof Type.ctor;
}

function getChildren(field, value) {
  if (field.repeated) {
    return value;
  } else if (field.map) {
    return [...Object.values(value)];
  } else {
    return [value];
  }
}

// Fixes create to make sure the Message has the correct types.
// It accepts the interfaces for the objects (regular objects potentially missing fields),
// but we then expect it to have the correct child Message objects.
function fixCreate(Type) {
  const originalCreate = Type.create.bind(Type);

  Type.create = (...args) => {
    const created = originalCreate(...args);

    for (const field of Object.values(Type.fields)) {
      // This is not the type of field we need to convert
      if (!created[field.name] || !field.resolvedType || field.resolvedType instanceof Enum) {
        continue;
      }

      if (field.repeated) {
        created[field.name] = created[field.name].map((value) => {
          if (value instanceof field.resolvedType) {
            return value;
          } else {
            return field.resolvedType.create(value);
          }
        });
      } else if (field.map) {
        created[field.name] = Object.fromEntries(
            Object.entries(created[field.name]).map(([key, value]) => {
              if (value instanceof field.resolvedType) {
                return [key, value];
              } else {
                return [key, field.resolvedType.create(value)];
              }
            })
        );
      } else {
        // This is already an instance of the type, so no need to convert it.
        if (!(created[field.name] instanceof field.resolvedType)) {
          // We have a plain object (or the wrong type) but we want a Message.
          created[field.name] = field.resolvedType.create(created[field.name]);
        }
      }
    }

    return created;
  };
}

function addValidations(Type, validationOptions = {}) {
  const existingDescriptor = Object.getOwnPropertyDescriptor(Type.__proto__, 'ctor');

  // This way the validation methods get added to any ctor added to this type, including
  // the default one that needs to be lazily created later.
  Object.defineProperty(Type, 'ctor', {
    ...existingDescriptor,
    get: function() {
      return existingDescriptor.get.call(Type);
    },
    set: function(ctor) {
      existingDescriptor.set.call(Type, ctor);

      ctor.prototype[validate] = function () {
        for (const [propertyName, options] of Object.entries(validationOptions)) {
          for (const [validationType, validationValue] of Object.entries(options)) {
            switch (validationType) {
              case 'required':
                if (!Object.prototype.hasOwnProperty.call(this, propertyName)) {
                  throw new TypeError(`Invalid ${propertyName}`);
                }
                break;
              case 'notEmpty':
                const value = this[propertyName];
                const field = Type.fields[propertyName];
                if (!getChildren(field, value).every((v) => v && v.length > 0)) {
                  throw new TypeError(`Invalid ${propertyName}`);
                }
                break;
            }
          }

          for (const [propertyName, field] of Object.entries(Type.fields)) {
            const value = this[propertyName];
            for (const childValue of getChildren(field, value)) {
              childValue?.[validate]?.();
            }
          }
        }
      }

      ctor.prototype[validated] = function () {
        this[validate]();
        return this;
      }

      if (!ctor.prototype.validate) {
        ctor.prototype.validate = ctor.prototype[validate];
      }

      if (!ctor.prototype.validated) {
        ctor.prototype.validated = ctor.prototype[validated];
      }
    }
  })

  Type.validateAndCreate = (...args) => {
    return Type.create(...args)[validated]();
  }
}

export function fixType(Type, validationOptions) {
  addInstanceof(Type);
  fixCreate(Type);
  addValidations(Type, validationOptions);
}
