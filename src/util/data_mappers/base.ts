import { Entity } from "../entity";

export abstract class DataMapper<DataSchema> {
  public abstract toEntity(data: DataSchema): Entity;
  public abstract toDict(entity: Entity): object;

  public toJson(entity: Entity): string {
    return JSON.stringify(this.toDict(entity));
  }
}
