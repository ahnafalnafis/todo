import { beforeEach, describe, expect, it } from "vitest";

import type { UniqueId } from "@/features/common/domain/types";
import { create_uid } from "@/util";

describe("Generates unique ID", () => {
  let uid: UniqueId;

  beforeEach(() => {
    uid = create_uid();
  });

  it("Is valid", () => {
    expect(uid).not.toStrictEqual("");
  });

  it("Converts to a number", () => {
    expect(parseInt(uid, 16)).toBeTypeOf("number");
  });
});
