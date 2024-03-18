import type { Category, TaskStatus, TimeStamp, UniqueId } from "@/types";

export interface Task {
  readonly id: UniqueId;
  title: string;
  description: string;
  readonly creation_date: TimeStamp;
  due_date: TimeStamp;
  status: TaskStatus;
  categories: Category[];
}
