import { describe, it, expect } from "vitest";
import { DATABASE_ID, DATABASE_KEY } from "@/constants";

describe("Loading .env file", () => {
  it("DATABASE_ID should be valid", () => {
    expect(DATABASE_ID).not.toStrictEqual("undefined");
  });

  it("DATABASE_KEY should be valid", () => {
    expect(DATABASE_KEY).not.toStrictEqual("undefined");
  });
});
