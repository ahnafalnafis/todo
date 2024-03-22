import type { UniqueId } from "@core/types";
import { Task } from "../entities";

export default interface ITaskRepository {
  addTask(data: Task): Promise<void>;
  getTasks(): Promise<Task[]>;
  updateTask(new_data: Task): Promise<void>;
  deleteTask(id: UniqueId): Promise<void>;
}
