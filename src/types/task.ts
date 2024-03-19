import type { TimeStamp } from "./basic";

export enum TaskStatus {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

export type Task = {
  title: string;
  description: string;
  due_date: TimeStamp;
  status: TaskStatus;
  categories: string[];
};
