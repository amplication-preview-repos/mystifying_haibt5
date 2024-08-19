import * as graphql from "@nestjs/graphql";
import { FileProcessingService } from "./fileprocessing.service";

export class FileProcessingResolver {
  constructor(protected readonly service: FileProcessingService) {}

  @graphql.Query(() => String)
  async GetFile(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.GetFile(args);
  }

  @graphql.Query(() => String)
  async SearchFile(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SearchFile(args);
  }
}
