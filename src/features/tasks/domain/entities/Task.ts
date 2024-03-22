import { Entity } from "@/features/common/domain/entities";

import type { TimeStamp, UniqueId } from "@/features/common/domain/types";
import { TaskPriority, TaskStatus } from "../enums";

export default class Task implements Entity {
  constructor(
    readonly id: UniqueId,
    public title: string,
    public description: string,
    readonly creation_date: TimeStamp,
    public due_date: TimeStamp,
    public status: TaskStatus,
    public priority: TaskPriority,
    public categories: string[]
  ) {}
}
