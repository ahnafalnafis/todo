import { describe, expect, it } from "vitest";
import { Task } from "@/features/tasks/domain/entities";
import data from "../data";

describe.todo("Creating Task entity", () => {
  const task1 = new Task(
    data[0].id,
    data[0].title,
    data[0].description,
    data[0].creation_date,
    data[0].due_date,
    data[0].status,
    data[0].priority,
    data[0].categories,
  );

  const task2 = new Task(
    data[1].id,
    data[1].title,
    data[1].description,
    data[1].creation_date,
    data[1].due_date,
    data[1].status,
    data[1].priority,
    data[1].categories,
  );

  it("Is valid", () => {
    expect(task1.isValid()).toBeTruthy();
    expect(task2.isValid()).toBeFalsy();
  });
});
