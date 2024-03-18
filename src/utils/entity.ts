import { UniqueId } from "@/types";

export interface Entity {
  id: UniqueId;
  isValid(): boolean;
}
