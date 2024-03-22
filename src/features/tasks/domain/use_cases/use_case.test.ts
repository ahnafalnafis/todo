import { describe, expect, it } from "vitest";

import { COLLECTION } from "@core/constants";

import { TaskPriority, TaskStatus } from "../entities/enums";

import AddTask from "./AddTask";
import DeleteTask from "./DeleteTask";
import GetTasks from "./GetTasks";
import UpdateTask from "./UpdateTask";

import { TaskModel } from "../../data/models";
import { TaskRepository } from "../../data/repositories";
import { TaskRemoteDataSource } from "../../data/sources";

const data_source = new TaskRemoteDataSource(COLLECTION.TEST_TASKS);
const repository = new TaskRepository(data_source);

const add_task = new AddTask(repository);
const get_tasks = new GetTasks(repository);
const update_task = new UpdateTask(repository);
const delete_task = new DeleteTask(repository);

const time1 = new Date(2024, 3, 12).getTime();
const time2 = new Date(2024, 3, 22).getTime();

const data = [
  {
    id: "1",
    title: "Test the Task entity",
    description: "Nothing really here.",
    creation_date: time1,
    due_date: time2,
    status: TaskStatus.DOING,
    priority: TaskPriority.HIGH,
    categories: ["easy", "favorite"],
  },
  {
    id: "2",
    title: "Test use cases",
    description: "Hi! Nothing's here",
    creation_date: 12,
    due_date: 127,
    status: TaskStatus.DOING,
    priority: TaskPriority.URGENT,
    categories: ["very easy"],
  },
];

const task1 = new TaskModel().fromDict(data[0]);
const task2 = new TaskModel().fromDict(data[1]);

describe("Testing use cases", () => {
  it("Should add task to the database", async () => {
    await add_task.execute(task1);
    await add_task.execute(task2);
    expect(await get_tasks.execute()).toStrictEqual([task1, task2]);
  });

  it("Should fetch tasks from the database", async () => {
    expect(await get_tasks.execute()).toStrictEqual([task1, task2]);
  });

  it("Should update data into the database", async () => {
    task1.status = TaskStatus.DONE;
    task1.priority = TaskPriority.LOW;

    await update_task.execute(task1);
    expect(await get_tasks.execute()).toStrictEqual([task2, task1]);
  });

  it("Should delete all data from the database", async () => {
    await delete_task.execute(task1.id);
    await delete_task.execute(task2.id);
    expect(await get_tasks.execute()).toStrictEqual([]);
  });
});
