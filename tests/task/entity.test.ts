import { describe, expect, expectTypeOf, test } from "vitest";
import { TaskEntity } from "../../src/entities";
import type { TaskStatus, TimeStamp, UniqueId } from "../../src/types";
import { task_data } from "../data";

const task_entity = new TaskEntity(
  task_data.title,
  task_data.description,
  task_data.due_date,
  task_data.status,
  task_data.categories,
);

describe("Testing TaskEntity", () => {
  test("Check data types", () => {
    expectTypeOf(task_entity.id).toMatchTypeOf<UniqueId>();
    expectTypeOf(task_entity.title).toMatchTypeOf<string>();
    expectTypeOf(task_entity.description).toMatchTypeOf<string>();
    expectTypeOf(task_entity.creation_date).toMatchTypeOf<TimeStamp>();
    expectTypeOf(task_entity.due_date).toMatchTypeOf<TimeStamp>();
    expectTypeOf(task_entity.status).toMatchTypeOf<TaskStatus>();
    expectTypeOf(task_entity.categories).toMatchTypeOf<string[]>();
  });

  test("Check required properties are not empty", () => {
    expect(task_entity.id).not.toStrictEqual("");
    expect(task_entity.title).not.toStrictEqual("");
    expect(task_entity.creation_date).not.toStrictEqual("");
    expect(task_entity.status).not.toStrictEqual("");
  });
});
