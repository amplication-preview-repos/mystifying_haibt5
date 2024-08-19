import { Injectable } from "@nestjs/common";

@Injectable()
export class FileProcessingService {
  constructor() {}
  async GetFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async SearchFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
