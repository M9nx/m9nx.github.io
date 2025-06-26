import { build, validateAndBuild, validated } from './Symbols';

export default class Builder {
  static createAndAttachToType(Type) {
    class MessageBuilder extends Builder {
      static from(instance) {
        if (!(instance instanceof Type.ctor)) {
          throw new Error(
            `cannot create ${Type.name}.Builder from object; types do not match`
          );
        }

        const builder = new MessageBuilder();

        for (const key in Type.fields) {
          if (Object.prototype.hasOwnProperty.call(instance, key)) {
            const field = Type.fields[key];
            builder[field.name](instance[field.name]);
          }
        }

        return builder;
      }
    }

    for (const key in Type.fields) {
      const field = Type.fields[key];

      MessageBuilder.prototype[field.name] = function(value) {
        this[`_${field.name}`] = value;
        return this;
      };
    }

    MessageBuilder.prototype[build] = function() {
      const values = {};

      for (const key in Type.fields) {
        const field = Type.fields[key];
        values[field.name] = this[`_${field.name}`];
      }

      return Type.create(values);
    };

    MessageBuilder.prototype[validateAndBuild] = function() {
      return this.build()[validated]();
    }

    if (!MessageBuilder.prototype.build) {
      MessageBuilder.prototype.build = MessageBuilder.prototype[build];
    }

    if (!MessageBuilder.prototype.validateAndBuild) {
      MessageBuilder.prototype.validateAndBuild = MessageBuilder.prototype[validateAndBuild];
    }

    Type.Builder = MessageBuilder; // eslint-disable-line no-param-reassign

    return MessageBuilder;
  }
}
