import { describe, expect, it } from "vitest";

import {
  CreateCommand,
  DeleteCommand,
  ReadCommand,
  UpdateCommand,
} from "@/features/common/domain/commands";
import MockTaskRepository from "./MockTaskRepository";
import { TaskDataMapper } from "@/features/tasks/data/mappers";
import { TaskPriority, TaskStatus } from "@/features/tasks/domain/enums";
import data from "./data";

describe("Testing use cases", () => {
  const data_mapper = new TaskDataMapper();
  const repository = new MockTaskRepository();

  const create_command = new CreateCommand(repository);
  const read_command = new ReadCommand(repository);
  const update_command = new UpdateCommand(repository);
  const delete_command = new DeleteCommand(repository);

  const task1 = data_mapper.toEntity(data[0]);
  const task2 = data_mapper.toEntity(data[2]);

  it("Should insert data into the database", async () => {
    await create_command.execute(task1);
    await create_command.execute(task2);
    expect(await read_command.execute()).toStrictEqual([task1, task2]);
  });

  it("Should read data from the database", async () => {
    expect(await read_command.execute()).toStrictEqual([task1, task2]);
  });

  it("Should update data into the database", async () => {
    task1.status = TaskStatus.DONE;
    task1.priority = TaskPriority.LOW;

    await update_command.execute(task1);
    expect(await read_command.execute()).toStrictEqual([task2, task1]);
  });

  it("Should delete all data from the database", async () => {
    await delete_command.execute(task1.id);
    await delete_command.execute(task2.id);
    expect(await read_command.execute()).toStrictEqual([]);
  });
});
