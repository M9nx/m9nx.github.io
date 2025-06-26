// DO NOT EDIT! This is copy and pasted from dashboard
// TODO(cvu): eventually import this from dashboard via bazel
// frontend/@banking/ui/addon/utils/assert.ts
import { nonNullable, typeofBoolean } from "./predicates";

// eslint-disable-next-line
export default function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg ?? "assertion failure");
  }
}

interface Constructor<T> extends Function {
  // eslint-disable-next-line
  new (...args: any[]): T;
}

// eslint-disable-next-line
export function assertInstanceOf<T>(val: any, ctor: Constructor<T>): T {
  // eslint-disable-next-line
  function assert(val: any, ctor: Constructor<T>): asserts val is T {
    if (!(val instanceof ctor)) {
      throw new TypeError(`Expected value to be an instance of ${ctor.name}.`);
    }
  }

  assert(val, ctor);
  return val;
}

export function assertBoolean(val: unknown): boolean {
  assert(typeofBoolean(val), "value must be boolean");
  return val;
}

export function assertNonNullable<T>(val: T): NonNullable<T> {
  assert(nonNullable(val), "value cannot be nullable");
  return val;
}
