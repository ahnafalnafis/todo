import { describe, expect, expectTypeOf, test } from "vitest";
import type { UniqueId } from "../src/types";
import { makeUid } from "../src/util/uid";

const uid = makeUid("test");

describe("Test uid generator", () => {
  test("uid data type is UniqueId", () => {
    expectTypeOf(uid).toMatchTypeOf<UniqueId>();
  });

  test("Return an unique id", () => {
    expect(uid).not.toStrictEqual("");
  });
});
