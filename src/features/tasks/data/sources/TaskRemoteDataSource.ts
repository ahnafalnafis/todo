import { COLLECTION, DATABASE_ID, DATABASE_KEY } from "@core/constants";
import { createClient } from "@supabase/supabase-js";

import type { UniqueId } from "@core/types";
import { TaskModel } from "../models";
import { DataSource } from "@core/abstracts";

export default class TaskRemoteDataSource implements DataSource<TaskModel> {
  private db = createClient(DATABASE_ID, DATABASE_KEY);

  constructor(private collection = COLLECTION.TASKS) {}

  public async create(data: TaskModel): Promise<void> {
    await this.db.from(this.collection).insert(data);
  }

  public async read(): Promise<TaskModel[]> {
    const { data } = await this.db.from(this.collection).select();
    const _data: TaskModel[] = [];

    for (const i of data || []) {
      _data.push(new TaskModel().fromDict(i));
    }

    return _data;
  }

  public async update(new_data: TaskModel): Promise<void> {
    await this.db.from(this.collection).update(new_data).eq("id", new_data.id);
  }

  public async delete(id: UniqueId): Promise<void> {
    await this.db.from(this.collection).delete().eq("id", id);
  }
}
