import { UniqueId } from "@/domain/types";

export function makeUid(): UniqueId {
  const random_number = Math.floor(Math.random() * 1000);
  const uid = (Date.now() * random_number).toString(16);

  return uid;
}
