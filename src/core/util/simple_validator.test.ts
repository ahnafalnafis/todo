import { describe, expect, it } from "vitest";

import { is_null_or_undefined } from "./simple_validator";

describe("Testing simple validator", () => {
  let fun: unknown;

  it("Checks whether given value is null or undefined", () => {
    expect(is_null_or_undefined(fun)).toBeTruthy();

    fun = null;
    expect(is_null_or_undefined(fun)).toBeTruthy();
  });
});
