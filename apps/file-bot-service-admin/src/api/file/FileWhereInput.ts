import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
};
