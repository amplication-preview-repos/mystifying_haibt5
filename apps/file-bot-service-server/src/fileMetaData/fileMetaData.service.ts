import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FileMetaDataServiceBase } from "./base/fileMetaData.service.base";

@Injectable()
export class FileMetaDataService extends FileMetaDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
