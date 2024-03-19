import { describe, expect, expectTypeOf, test } from "vitest";
import { TaskEntity } from "../../src/entities";
import type { TaskStatus, TimeStamp, UniqueId } from "../../src/types";
import { TaskDataMapper } from "../../src/util/mappers";
import { task_data } from "../data";

const mapper = new TaskDataMapper();
const task_entity = mapper.toEntity(task_data);

describe("Test data mappers", () => {
  test("Should return an entity", () => {
    expectTypeOf(task_entity).toMatchTypeOf<TaskEntity>();
  });
});

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
