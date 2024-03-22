import { UniqueId } from "@core/types";

export default interface DataSource<TData> {
  create(data: TData): Promise<void>;
  read(): Promise<TData[]>;
  update(new_data: TData): Promise<void>;
  delete(id: UniqueId): Promise<void>;
}
