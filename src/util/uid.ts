import { UniqueId } from "@/types";

// TODO: Find better names for these variables.
export function makeUid(prefix: string): UniqueId {
  const resizer = 1000;
  const randomizer = Math.floor(Math.random() * resizer);
  const hex = (Date.now() * randomizer).toString(16);

  const uid = prefix + "-" + hex;

  return uid;
}
