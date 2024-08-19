import { SortOrder } from "../../util/SortOrder";

export type FileMetaDataOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
