// DO NOT EDIT! This is copy and pasted from dashboard
// frontend/@banking/ui/addon/utils/predicates.ts
// TODO(cvu): eventually import this from dashboard via bazel
export const typeofBoolean = (value: unknown): value is boolean => typeof value === "boolean";

export const nonNullable = <T>(value: T): value is NonNullable<T> => value != null;
