import { Entity } from "../domain/entities";
import type { UniqueId } from "../domain/types";

export default interface Repository {
  create(new_data: Entity): Promise<void>;

  read(): Promise<Entity[]>;

  update(new_data: Entity): Promise<void>;

  delete(id: UniqueId): Promise<void>;
}
