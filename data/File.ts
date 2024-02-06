import * as path from "path";
import * as fs from "fs";

interface FileInterface {
  readonly filePath: string;
  readonly file: string;
  size(): string;
  name(): string;
  location(): string;
  type(): string;
  contain(): Promise<string>;
}

const File = require("./File") as any;

export class file implements FileInterface {
  readonly filePath: string;
  readonly file: string;

  constructor(file: string) {
    this.filePath = path.resolve(file);
    this.file = file;
  }

  size(): string {
    const fileSizeInKilobytes = fs.statSync(this.filePath).size / 1024;
    const fileSizeFormatted = fileSizeInKilobytes.toFixed(2) + " KB";
    return fileSizeFormatted;
  }

  name(): string {
    return path.basename(this.file);
  }

  location(): string {
    return path.dirname(this.file);
  }

  type(): string {
    return path.extname(this.file);
  }

  async contain(): Promise<string> {
    const fileContents: string = await File.contain(this.file);
    return fileContents;
  }
}
