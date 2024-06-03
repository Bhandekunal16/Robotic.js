const fs = require("fs");
const path = require("path");

class Config {
  loadEnv(filePath) {
    const envPath = path.resolve(process.cwd(), filePath);
    const envContent = fs.readFileSync(envPath, "utf-8");
    envContent.split("\n").forEach((line) => {
      line = line.trim();
      if (line.length === 0 || line.startsWith("#")) {
        return;
      }
      const [key, value] = line.split(":");
      if (key && value !== undefined) {
        process.env[key.trim()] = value.trim();
      }
    });
  }
}

module.exports = Config;
