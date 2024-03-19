import { TaskEntity } from "@/entities";
import type { Task } from "@/types";

import { DataMapper } from "./base";

export class TaskDataMapper implements DataMapper<Task, TaskEntity> {
  public toEntity(data: Task): TaskEntity {
    return new TaskEntity(
      data.title,
      data.description,
      data.due_date,
      data.status,
      data.categories,
    );
  }

  public toObject(entity: TaskEntity): object {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      creation_date: entity.creation_date,
      due_date: entity.due_date,
      status: entity.status,
      categories: entity.categories,
    };
  }

  public toJson(entity: TaskEntity): string {
    return JSON.stringify(this.toObject(entity));
  }
}
