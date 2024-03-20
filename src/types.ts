export type TimeStamp = number;
export type UniqueId = String;

export enum TaskStatus {
  TODO = "todo",
  DOING = "doing",
  DONE = "done",
}

export enum TaskPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent",
}
