import type { UniqueId, TimeStamp } from "@core/types";
import { Task } from "../../domain/entities";
import { TaskStatus, TaskPriority } from "../../domain/entities/enums";

export default class TaskModel extends Task {
  constructor(
    readonly id: UniqueId = "",
    public title: string = "",
    public description: string = "",
    readonly creation_date: TimeStamp = 1,
    public due_date: TimeStamp = 1,
    public status: TaskStatus = TaskStatus.TODO,
    public priority: TaskPriority = TaskPriority.LOW,
    public categories: string[] = [],
  ) {
    super(
      id,
      title,
      description,
      creation_date,
      due_date,
      status,
      priority,
      categories,
    );
  }

  public toDict(): Task {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      creation_date: this.creation_date,
      due_date: this.due_date,
      priority: this.priority,
      status: this.status,
      categories: this.categories,
    };
  }

  public fromDict(dict: Task): TaskModel {
    return new TaskModel(
      dict.id,
      dict.title,
      dict.description,
      dict.creation_date,
      dict.due_date,
      dict.status,
      dict.priority,
      dict.categories,
    );
  }
}
