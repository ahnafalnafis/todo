import type { UniqueId } from "@/features/common/domain/types";
import Repository from "../Repository";
import Command from "./Command";

export default class DeleteCommand implements Command<UniqueId, void> {
  constructor(private repository: Repository) {}

  public async execute(id: UniqueId): Promise<void> {
    await this.repository.delete(id);
  }
}
