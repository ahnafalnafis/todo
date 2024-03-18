import type { Category, TaskStatus, TimeStamp, UniqueId } from "@/types";
import type { Entity } from "@/utils";

export class TaskEntity implements Entity {
  constructor(
    readonly id: UniqueId,
    public title: string,
    public description: string,
    readonly creation_date: TimeStamp,
    public due_date: TimeStamp,
    public status: TaskStatus,
    public categories: Category[]
  ) {}

  public isValid(): boolean {
    // TODO: Implement this method
    return true;
  }
}
