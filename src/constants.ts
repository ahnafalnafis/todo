import { config } from "dotenv";

config();

export const DATABASE_ID = String(process.env.DATABASE_ID);
export const DATABASE_KEY = String(process.env.DATABASE_KEY);

/**
 * This enum represents available collections/tables in the database
 */
export enum COLLECTION {
  USERS = "users",
  TASKS = "tasks",
  TEST_USERS = "test_users",
  TEST_TASKS = "test_tasks",
}
