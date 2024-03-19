import { TaskStatus, type Task } from "../../src/types";

export const task_data: Task = {
  title: "Test task entities",
  description: "Nothing really here.",
  due_date: new Date(2024, 2, 20, 23, 30).getTime(),
  status: TaskStatus.TODO,
  categories: ["very easy", "low"],
};

export const json_task_data = JSON.stringify(task_data);
