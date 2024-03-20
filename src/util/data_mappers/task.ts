import type { TaskDataSchema } from "@/data/schemas";
import { Task } from "@/entities";

import { DataMapper } from "./base";

export class TaskDataMapper extends DataMapper<TaskDataSchema> {
  public toEntity(data: TaskDataSchema): Task {
    return new Task(
      data.title,
      data.description,
      data.due_date,
      data.status,
      data.priority,
      data.categories,
    );
  }

  public toDict(entity: Task): object {
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
}
