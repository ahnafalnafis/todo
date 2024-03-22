import { Command } from "@core/abstracts";

import { Task } from "../entities";
import { ITaskRepository } from "../repositories";

export default class ReadCommand implements Command<void, Task[]> {
  constructor(private repository: ITaskRepository) {}

  public async execute(): Promise<Task[]> {
    return await this.repository.getTasks();
  }
}
