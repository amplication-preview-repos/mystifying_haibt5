import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FileProcessingService } from "./fileprocessing.service";

@swagger.ApiTags("fileProcessings")
@common.Controller("fileProcessings")
export class FileProcessingController {
  constructor(protected readonly service: FileProcessingService) {}

  @common.Get("/file/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetFile(body);
      }

  @common.Get("/search")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchFile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SearchFile(body);
      }
}
