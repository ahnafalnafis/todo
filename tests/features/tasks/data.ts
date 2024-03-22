import { TaskDataSchema } from "@/features/tasks/data/schemas";
import { TaskPriority, TaskStatus } from "@/features/tasks/domain/enums";

const time1 = new Date(2024, 3, 12).getTime();
const time2 = new Date(2024, 3, 22).getTime();

const data: TaskDataSchema[] = [
  {
    id: "1",
    title: "Test the Task entity",
    description: "Nothing really here.",
    creation_date: time1,
    due_date: time2,
    status: TaskStatus.DOING,
    priority: TaskPriority.HIGH,
    categories: ["easy", "favorite"],
  },
  {
    id: "2",
    title: "Chill out",
    description: "Bruh",
    creation_date: -1,
    due_date: -1,
    status: TaskStatus.DONE,
    priority: TaskPriority.LOW,
    categories: ["dummy"],
  },
  {
    id: "3",
    title: "Test use cases",
    description: "Hi! Nothing's here",
    creation_date: 12,
    due_date: 127,
    status: TaskStatus.DOING,
    priority: TaskPriority.URGENT,
    categories: ["very easy"],
  },
];

export default data;
