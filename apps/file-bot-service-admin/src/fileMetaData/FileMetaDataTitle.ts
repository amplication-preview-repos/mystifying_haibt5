import { FileMetaData as TFileMetaData } from "../api/fileMetaData/FileMetaData";

export const FILEMETADATA_TITLE_FIELD = "name";

export const FileMetaDataTitle = (record: TFileMetaData): string => {
  return record.name?.toString() || String(record.id);
};
