import { UniqueId } from "@/types";

export function makeUid(prefix = "id", separator = "-"): UniqueId {
  const random_number = Math.floor(Math.random() * 1000);
  const hex = (Date.now() * random_number).toString(16);

  return prefix + separator + hex;
}
