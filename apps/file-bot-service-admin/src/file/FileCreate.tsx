import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="FileName" source="fileName" />
        <TextInput label="FilePath" source="filePath" />
      </SimpleForm>
    </Create>
  );
};
