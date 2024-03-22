import { Command } from "@core/abstracts";

import { Task } from "../entities";
import { ITaskRepository } from "../repositories";

export default class AddTask implements Command<Task, void> {
  constructor(private repository: ITaskRepository) {}

  public async execute(data: Task): Promise<void> {
    await this.repository.addTask(data);
  }
}
