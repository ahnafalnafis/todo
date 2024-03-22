import { DataMapper } from "@/features/common/data/mappers";

import { Task } from "@/features/tasks/domain/entities";
import type { TaskDataSchema } from "../schemas";

export default class TaskDataMapper extends DataMapper<TaskDataSchema> {
  public toEntity(data: TaskDataSchema): Task {
    return new Task(
      data.id,
      data.title,
      data.description,
      data.creation_date,
      data.due_date,
      data.status,
      data.priority,
      data.categories
    );
  }

  public toDict(entity: Task): TaskDataSchema {
    return {
      id: entity.id,
      title: entity.title,
      description: entity.description,
      creation_date: entity.creation_date,
      due_date: entity.due_date,
      priority: entity.priority,
      status: entity.status,
      categories: entity.categories,
    };
  }
}
