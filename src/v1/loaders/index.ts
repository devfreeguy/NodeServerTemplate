import mongooseLoader from "./database.js";
import expressLoader from "../../express.js";
import logger from "../config/logging.js";

const initApp = async (app: any): Promise<void> => {
  try {
    await mongooseLoader();
    logger.info(`Mongoose initiated.`);
    await expressLoader(app);
    logger.info(`Express app initiated.`);
  } catch (error) {
    console.error("Error initializing app:", error);
    throw error;
  }
};

export default initApp;
