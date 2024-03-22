import type { UniqueId } from "../../domain/types";

export default interface DataSource<TSchema> {
  insert(new_data: TSchema): Promise<void>;

  read(): Promise<TSchema[]>;

  update(new_data: TSchema): Promise<void>;

  delete(id: UniqueId): Promise<void>;
}
