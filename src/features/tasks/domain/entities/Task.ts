import { Entity } from "@features/common/domain/entities";
import type { TimeStamp, UniqueId } from "@features/common/domain/types";
import { isNullAndUndefined, isStrictlyValid } from "@util";
import { TaskPriority, TaskStatus } from "../enums";

export default class Task extends Entity {
  private _title: string;
  private _description: string;
  private _due_date: TimeStamp;
  private _status: TaskStatus;
  private _priority: TaskPriority;
  private _categories: string[];

  private title_is_valid: boolean;
  private due_date_is_valid: boolean;

  constructor(
    id: UniqueId,
    title: string,
    description: string,
    creation_date: TimeStamp,
    due_date: TimeStamp,
    status: TaskStatus,
    priority: TaskPriority,
    categories: string[],
  ) {
    super();

    this._id = id;
    this._title = title;
    this._description = description;
    this._creation_date = creation_date;
    this._due_date = due_date;
    this._status = status;
    this._priority = priority;
    this._categories = categories;
  }

  public isValid(): boolean {
    this.id_is_valid = !isNullAndUndefined(this._id);
    this.title_is_valid = isStrictlyValid(this._title, this._title !== "");

    this.creation_date_is_valid = isStrictlyValid(
      this._creation_date,
      this._creation_date > 0,
    );

    this.due_date_is_valid = isStrictlyValid(
      this._due_date,
      this._due_date > 0,
    );

    // prettier-ignore
    return this.id_is_valid
        && this.title_is_valid
        && this.creation_date_is_valid
        && this.due_date_is_valid
  }

  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

  public get due_date(): TimeStamp {
    return this._due_date;
  }
  public set due_date(value: TimeStamp) {
    this._due_date = value;
  }

  public get status(): TaskStatus {
    return this._status;
  }
  public set status(value: TaskStatus) {
    this._status = value;
  }

  public get priority(): TaskPriority {
    return this._priority;
  }
  public set priority(value: TaskPriority) {
    this._priority = value;
  }

  public get categories(): string[] {
    return this._categories;
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
}
