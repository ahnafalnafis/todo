import { describe, expect, expectTypeOf, test } from "vitest";
import { Task } from "../../src/entities";
import type { TaskStatus, TimeStamp, UniqueId } from "../../src/types";
import { TaskDataMapper } from "../../src/util/data_mappers";
import { task_data } from "../data";

const mapper = new TaskDataMapper();
const task: Task = mapper.toEntity(task_data);

describe("Test data mappers", () => {
  test("Should return an entity", () => {
    expectTypeOf(task).toMatchTypeOf<Task>();
  });
});

describe("Testing TaskEntity", () => {
  test("Check data types", () => {
    expectTypeOf(task.id).toMatchTypeOf<UniqueId>();
    expectTypeOf(task.title).toMatchTypeOf<string>();
    expectTypeOf(task.description).toMatchTypeOf<string>();
    expectTypeOf(task.creation_date).toMatchTypeOf<TimeStamp>();
    expectTypeOf(task.due_date).toMatchTypeOf<TimeStamp>();
    expectTypeOf(task.status).toMatchTypeOf<TaskStatus>();
    expectTypeOf(task.categories).toMatchTypeOf<string[]>();
  });

  test("Check required properties are not empty", () => {
    expect(task.id).not.toStrictEqual("");
    expect(task.title).not.toStrictEqual("");
    expect(task.creation_date).not.toStrictEqual("");
    expect(task.status).not.toStrictEqual("");
  });
});
