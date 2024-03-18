import { describe, expect, it } from "vitest";
import { TaskDataModel } from "../../src/external/data/models";
import { task } from "../data";

const task_model = new TaskDataModel().parse(task);

describe("Test TaskDataModel", () => {
  it("Should return Json data", () => {
    expect(task_model.toJson()).toStrictEqual(JSON.stringify(task));
  });

  it("Should show in table", () => {
    console.table([task_model]);
  });
});
