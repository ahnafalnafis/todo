import Command from "./Command";

import { Entity } from "@/features/common/domain/entities";
import Repository from "../Repository";

export default class CreateCommand implements Command<Entity, void> {
  constructor(private repository: Repository) {}

  public async execute(new_data: Entity): Promise<void> {
    await this.repository.create(new_data);
  }
}
