import { Module } from "@nestjs/common";
import { FileProcessingService } from "./fileprocessing.service";
import { FileProcessingController } from "./fileprocessing.controller";
import { FileProcessingResolver } from "./fileprocessing.resolver";

@Module({
  controllers: [FileProcessingController],
  providers: [FileProcessingService, FileProcessingResolver],
  exports: [FileProcessingService],
})
export class FileProcessingModule {}
