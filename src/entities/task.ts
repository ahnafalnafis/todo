import type { TaskPriority, TaskStatus, TimeStamp } from "@/types";
import { Entity } from "@/util";

// FIXME: Lsp doesn't give suggestion of properties inherited from the parent
// class.
export class Task extends Entity {
  constructor(
    public title: string,
    public description: string,
    public due_date: TimeStamp,
    public status: TaskStatus,
    public priority: TaskPriority,
    public categories: string[],
  ) {
    super();
  }
}
