import type { TimeStamp, UniqueId } from "../types";

export default interface Entity {
  readonly id: UniqueId;
  readonly creation_date: TimeStamp;
}
