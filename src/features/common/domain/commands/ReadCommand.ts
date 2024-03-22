import Command from "./Command";

import { Entity } from "@/features/common/domain/entities";
import Repository from "../Repository";
import type { ReadParams } from "../types";

export default class ReadCommand implements Command<ReadParams, Entity[]> {
  constructor(private repository: Repository) {}

  public async execute(param?: ReadParams): Promise<Entity[]> {
    return await this.repository.read(param);
  }
}
