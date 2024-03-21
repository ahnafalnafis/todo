import { isNullAndUndefined, isStrictlyValid, uid } from "@util";
import type { TimeStamp, UniqueId } from "../types";

export default abstract class Entity {
  protected _id: UniqueId;
  protected _creation_date: TimeStamp;

  protected id_is_valid: boolean;
  protected creation_date_is_valid: boolean;

  constructor() {
    this._id = uid();
    this._creation_date = Date.now();

    this.id_is_valid = true;
    this.creation_date_is_valid = true;
  }

  public isValid(): boolean {
    this.id_is_valid = !isNullAndUndefined(this._id);
    this.creation_date_is_valid = isStrictlyValid(
      this._creation_date,
      this._creation_date > 0,
    );

    // prettier-ignore
    return this.id_is_valid
        && this.creation_date_is_valid;
  }

  public get id(): UniqueId {
    return this._id;
  }
  public set id(value: UniqueId) {
    this._id = value;
  }

  public get creation_date(): TimeStamp {
    return this._creation_date;
  }
  public set creation_date(value: TimeStamp) {
    this._creation_date = value;
  }
}
