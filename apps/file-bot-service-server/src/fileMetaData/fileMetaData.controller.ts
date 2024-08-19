import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FileMetaDataService } from "./fileMetaData.service";
import { FileMetaDataControllerBase } from "./base/fileMetaData.controller.base";

@swagger.ApiTags("fileMetaData")
@common.Controller("fileMetaData")
export class FileMetaDataController extends FileMetaDataControllerBase {
  constructor(protected readonly service: FileMetaDataService) {
    super(service);
  }
}
