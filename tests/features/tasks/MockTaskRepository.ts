import DataRepository from "@/features/common/data/DataRepository";

import { COLLECTION } from "@/constants";

import { TaskDataMapper } from "@/features/tasks/data/mappers";
import type { TaskDataSchema } from "@/features/tasks/data/schemas";
import { RemoteDataSource } from "@/features/common/data/sources";

class MockTaskRepository extends DataRepository<TaskDataSchema> {
  constructor() {
    super(
      new RemoteDataSource<TaskDataSchema>(COLLECTION.TEST_TASKS),
      new TaskDataMapper(),
    );
  }
}

export default MockTaskRepository;
