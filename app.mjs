import Logger from "./src/interface/Logger.js";
import Color from "./src/interface/color.js";
import Maintainer from "./src/interface/maintain.js";
import Timestamp from "./src/interface/time.js";
import DataGenerator from "./src/class/dataGenerate.js";
import OtpGenerator from "./src/class/OtpGenerator.js";
import HexColorGenerator from "./src/class/random-hexColor-generator.js";
import Response from "./src/class/response.js";
import TypeChecker from "./src/class/TypeChecker.js";
import UUID from "./src/class/uuid.js";
import mathematic from "./src/data/mathematic.js";

export const custom = new Logger();
export const color = new Color();
export const maintain = new Maintainer();
export const time = new Timestamp();
export const dataGenerate = new DataGenerator();
export const otpGenerator = new OtpGenerator();
export const hexColorGenerator = new HexColorGenerator();
export const response = new Response();
export const typeChecker = new TypeChecker();
export const uuid = new UUID();
export const math = new mathematic();

