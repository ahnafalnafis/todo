import { Task } from "@features/tasks/domain/entities";
import { TaskPriority, TaskStatus } from "@features/tasks/domain/enums";
import { uid } from "@util";
import { describe, expect, it } from "vitest";

describe("Creating Task entity", () => {
  const current_time = Date.now();
  const five_days = 1000 * 60 * 60 * 24 * 5;

  const data = {
    id: uid(),
    title: "Test the Task entity",
    description: "Nothing really here.",
    creation_date: current_time,
    due_date: current_time + five_days,
    status: TaskStatus.DOING,
    priority: TaskPriority.HIGH,
    categories: ["easy", "favorite"],
  };

  const task = new Task(
    data.id,
    data.title,
    data.description,
    data.creation_date,
    data.due_date,
    data.status,
    data.priority,
    data.categories,
  );

  const task1 = new Task(
    data.id,
    data.title,
    data.description,
    -1,
    -1,
    data.status,
    data.priority,
    data.categories,
  );

  it("Is valid", () => {
    expect(task.isValid()).toBeTruthy();
    expect(task1.isValid()).toBeFalsy();
  });
});
