import { Command } from "@core/abstracts";

import type { UniqueId } from "@core/types";
import { ITaskRepository } from "../repositories";

export default class DeleteTask implements Command<UniqueId, void> {
  constructor(private repository: ITaskRepository) {}

  public async execute(data: UniqueId): Promise<void> {
    await this.repository.deleteTask(data);
  }
}
