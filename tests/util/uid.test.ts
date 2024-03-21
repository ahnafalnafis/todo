import { beforeEach, describe, expect, it } from "vitest";

import type { UniqueId } from "@features/common/domain/types";
import { isValidUid, uid } from "@util";

describe("Generates unique ID", () => {
  let id: UniqueId;

  beforeEach(() => {
    id = uid();
  });

  it("Is valid", () => {
    expect(isValidUid(id)).not.toStrictEqual("");
  });

  it("Converts to a number", () => {
    expect(parseInt(id, 16)).toBeTypeOf("number");
  });
});
