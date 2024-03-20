import { TaskPriority, TaskStatus, TimeStamp } from "@/types";

export type TaskDataSchema = {
  title: string;
  description: string;
  due_date: TimeStamp;
  status: TaskStatus;
  priority: TaskPriority;
  categories: string[];
};
