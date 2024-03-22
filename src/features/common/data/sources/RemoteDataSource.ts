import DataSource from "./DataSource";

import { createClient } from "@supabase/supabase-js";

import { COLLECTION, DATABASE_ID, DATABASE_KEY } from "@/constants";

import type { UniqueId } from "@/features/common/domain/types";
import type { DataSchema } from "../schemas";

class RemoteDataSource<TSchema extends DataSchema>
  implements DataSource<TSchema>
{
  protected db = createClient(DATABASE_ID, DATABASE_KEY);

  constructor(protected collection: COLLECTION) {}

  public async insert(new_data: TSchema): Promise<void> {
    await this.db.from(this.collection).insert(new_data);
  }

  public async read(): Promise<TSchema[]> {
    const { data: raw_data } = await this.db.from(this.collection).select();

    const data: TSchema[] = raw_data || [];

    return data;
  }

  public async update(new_data: TSchema): Promise<void> {
    await this.db.from(this.collection).update(new_data).eq("id", new_data.id);
  }

  public async delete(id: UniqueId): Promise<void> {
    await this.db.from(this.collection).delete().eq("id", id);
  }
}

export default RemoteDataSource;
