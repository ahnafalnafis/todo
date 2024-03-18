import type { Task } from "@/boundaries";
import type { Category, TaskStatus, TimeStamp, UniqueId } from "@/types";
import type { DataModel } from "@/utils";

export class TaskDataModel implements DataModel<Task, TaskDataModel> {
  constructor(
    readonly id?: UniqueId,
    public title?: string,
    public description?: string,
    readonly creation_date?: TimeStamp,
    public due_date?: TimeStamp,
    public status?: TaskStatus,
    public categories?: Category[]
  ) {}

  public parse(data: Task): TaskDataModel {
    return new TaskDataModel(
      data.id,
      data.title,
      data.description,
      data.creation_date,
      data.due_date,
      data.status,
      data.categories
    );
  }

  public toJson(): string {
    return JSON.stringify({
      id: this.id,
      title: this.title,
      description: this.description,
      creation_date: this.creation_date,
      due_date: this.due_date,
      status: this.status,
      categories: this.categories,
    });
  }
}
