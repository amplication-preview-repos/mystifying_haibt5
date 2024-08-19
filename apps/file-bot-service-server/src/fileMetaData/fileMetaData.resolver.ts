import * as graphql from "@nestjs/graphql";
import { FileMetaDataResolverBase } from "./base/fileMetaData.resolver.base";
import { FileMetaData } from "./base/FileMetaData";
import { FileMetaDataService } from "./fileMetaData.service";

@graphql.Resolver(() => FileMetaData)
export class FileMetaDataResolver extends FileMetaDataResolverBase {
  constructor(protected readonly service: FileMetaDataService) {
    super(service);
  }
}
