import { Entity } from "@/features/common/domain/entities";

export default abstract class DataMapper<TData> {
  // TODO: Implement array handles of entities/data
  public abstract toEntity(data: TData): Entity;
  public abstract toDict(entity: Entity): object;

  public toJson(entity: Entity): string {
    return JSON.stringify(this.toDict(entity));
  }
}
