import type { UniqueId } from "@features/common/domain/types";

export function isNull(value: unknown): boolean {
  return value === null;
}

export function isNullOrUndefined(value: unknown): boolean {
  return value === null || value === undefined;
}

export function isNullAndUndefined(value: unknown): boolean {
  return value === null && value === undefined;
}

/**
 * Checks if the value is null or undefined and value meets certain condition.
 */
export function isStrictlyValid(value: unknown, condition: boolean): boolean {
  return !isNullAndUndefined(value) && condition;
}

export function isValidUid(uid: UniqueId): boolean {
  return !(isNullAndUndefined(uid) && uid === "");
}
