import { FileMetaDataWhereInput } from "./FileMetaDataWhereInput";
import { FileMetaDataOrderByInput } from "./FileMetaDataOrderByInput";

export type FileMetaDataFindManyArgs = {
  where?: FileMetaDataWhereInput;
  orderBy?: Array<FileMetaDataOrderByInput>;
  skip?: number;
  take?: number;
};
