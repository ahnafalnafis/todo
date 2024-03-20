import type { TimeStamp, UniqueId } from "@/types";
import { makeUid } from "@/util";

export abstract class Entity {
  readonly id: UniqueId = makeUid();
  readonly creation_date: TimeStamp = Date.now();
}
