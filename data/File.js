const path = require("path");
const fs = require("fs");
const ms = require("fs/promises");

class File {
  constructor(file) {
    this.filePath = path.resolve(file);
    this.file = file;
  }

  size() {
    const fileSizeInKilobytes = fs.statSync(this.filePath).size / 1024;
    const fileSizeFormatted = fileSizeInKilobytes.toFixed(2) + " KB";
    return fileSizeFormatted;
  }

  name() {
    return path.basename(this.file);
  }

  location() {
    return path.dirname(this.file);
  }

  type() {
    return path.extname(this.file);
  }

  contain() {
    const fileContents = ms.readFile(this.file, "utf8");
    return fileContents;
  }
}

module.exports = File;
