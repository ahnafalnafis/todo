import Repository from "../domain/Repository";

import { Entity } from "../domain/entities";
import type { ReadParams, UniqueId } from "../domain/types";
import { DataMapper } from "./mappers";
import { DataSource } from "./sources";

export default class DataRepository<TData> implements Repository {
  constructor(
    private source: DataSource<TData>,
    private mapper: DataMapper<TData>,
  ) {}

  public async create(new_data: Entity): Promise<void> {
    const data = this.mapper.toDict(new_data) as TData;
    await this.source.insert(data);
  }

  public async read(param?: ReadParams): Promise<Entity[]> {
    const raw_data = await this.source.read(param);
    const data: Entity[] = [];

    for (const i of raw_data) {
      data.push(this.mapper.toEntity(i));
    }

    return data;
  }

  public async update(new_data: Entity): Promise<void> {
    const data = this.mapper.toDict(new_data) as TData;
    await this.source.update(data);
  }

  public async delete(id: UniqueId): Promise<void> {
    await this.source.delete(id);
  }
}
