import { TaskDataSchema } from "../../src/data/schemas";
import { TaskPriority, TaskStatus } from "../../src/types";

export const task_data: TaskDataSchema = {
  title: "Test task entities",
  description: "Nothing really here.",
  due_date: new Date(2024, 2, 20, 23, 30).getTime(),
  status: TaskStatus.TODO,
  priority: TaskPriority.URGENT,
  categories: ["very easy", "low"],
};
