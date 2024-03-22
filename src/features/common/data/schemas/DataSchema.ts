import type { UniqueId, TimeStamp } from "@/features/common/domain/types";

type DataSchema = {
  id: UniqueId;
  creation_date: TimeStamp;
};

export default DataSchema;
