import type { TaskStatus, TimeStamp, UniqueId } from "@/types";
import type { Entity } from "@/util";
import { makeUid } from "@/util";

export class TaskEntity implements Entity {
  readonly id: UniqueId = makeUid("todo-");
  readonly creation_date: TimeStamp = Date.now();

  constructor(
    public title: string,
    public description: string,
    public due_date: TimeStamp,
    public status: TaskStatus,
    public categories: string[],
  ) {}
}
