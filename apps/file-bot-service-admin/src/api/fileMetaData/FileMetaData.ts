export type FileMetaData = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tags?: Array<"Option1">;
  updatedAt: Date;
};
