import { Module } from "@nestjs/common";
import { FileMetaDataModuleBase } from "./base/fileMetaData.module.base";
import { FileMetaDataService } from "./fileMetaData.service";
import { FileMetaDataController } from "./fileMetaData.controller";
import { FileMetaDataResolver } from "./fileMetaData.resolver";

@Module({
  imports: [FileMetaDataModuleBase],
  controllers: [FileMetaDataController],
  providers: [FileMetaDataService, FileMetaDataResolver],
  exports: [FileMetaDataService],
})
export class FileMetaDataModule {}
