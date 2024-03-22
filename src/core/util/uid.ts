import type { UniqueId } from "@/features/common/domain/types";

export function create_uid(): UniqueId {
  const random_number = Math.floor(Math.random() * 1000);
  const uid = (Date.now() * random_number).toString(16);

  return uid;
}
