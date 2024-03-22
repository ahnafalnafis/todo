import { DataSchema } from "@/features/common/data/schemas";

import type { TimeStamp } from "@/features/common/domain/types";
import { TaskPriority, TaskStatus } from "@/features/tasks/domain/enums";

type TaskDataSchema = DataSchema & {
  title: string;
  description: string;
  due_date: TimeStamp;
  status: TaskStatus;
  priority: TaskPriority;
  categories: string[];
};

export default TaskDataSchema;
