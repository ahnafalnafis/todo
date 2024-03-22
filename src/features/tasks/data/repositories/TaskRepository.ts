import { ITaskRepository } from "../../domain/repositories";

import type { UniqueId } from "@core/types";
import { TaskModel } from "../models";
import { DataSource } from "@core/abstracts";

export default class TaskRepository implements ITaskRepository {
  constructor(private source: DataSource<TaskModel>) {}

  public async addTask(data: TaskModel): Promise<void> {
    await this.source.create(data);
  }

  public async getTasks(): Promise<TaskModel[]> {
    return await this.source.read();
  }

  public async updateTask(new_data: TaskModel): Promise<void> {
    await this.source.update(new_data);
  }

  public async deleteTask(id: UniqueId): Promise<void> {
    await this.source.delete(id);
  }
}
