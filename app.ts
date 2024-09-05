/* eslint-disable @typescript-eslint/no-var-requires */
const logger = require("./src/interface/Logger");
const response = require("./src/class/response");
const Uuid = require("./src/class/uuid");
const OTP = require("./src/class/OtpGenerator");

import uuid from "./types/class/uuid";
import otp from "./types/class/OtpGenerator";
import Logger from "./types/interface/Logger";
import Response from "./types/class/response";

export const LOGGER: Logger = new logger();
export const Res: Response = new response();
export const UUID: uuid = new Uuid();
export const Otp: otp = new OTP();
