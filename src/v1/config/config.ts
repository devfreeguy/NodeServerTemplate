import { config } from "dotenv";
<<<<<<< HEAD
import { envValidation } from "../validations/index.js";
import logger from "./logging.js";
=======
import { envValidation } from "../validations";
import logger from "./logging";
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
config();

const { value: envVars, error } = envValidation.validate(process.env);
if (error) logger.error(error);
export const DB_CONNECTION: string = envVars.DB_CONNECTION;
export const PORT: number = parseInt(envVars.PORT);
<<<<<<< HEAD
export const NODE_ENV: string = envVars.NODE_ENV;
=======
export const NODE_ENV: string = envVars.NODE_ENV;

export const cspOptions = {
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    fontSrc: ["'self'", "fonts.gstatic.com"],
  },
};
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
