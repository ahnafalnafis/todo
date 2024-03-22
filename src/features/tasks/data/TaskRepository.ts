import DataRepository from "@/features/common/data/DataRepository";

import { COLLECTION } from "@/constants";

import { TaskDataMapper } from "./mappers";
import type { TaskDataSchema } from "./schemas";
import { RemoteDataSource } from "@/features/common/data/sources";

export default class TaskRepository extends DataRepository<TaskDataSchema> {
  constructor() {
    super(
      new RemoteDataSource<TaskDataSchema>(COLLECTION.TASKS),
      new TaskDataMapper(),
    );
  }
}
