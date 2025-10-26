<<<<<<< HEAD
import mongooseLoader from "./database.js";
import expressLoader from "../../express.js";
import logger from "../config/logging.js";
=======
import mongooseLoader from './database';
import expressLoader from '../../express';
import logger from '../config/logging';

>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

const initApp = async (app: any): Promise<void> => {
  try {
    await mongooseLoader();
    logger.info(`Mongoose initiated.`);
    await expressLoader(app);
    logger.info(`Express app initiated.`);
  } catch (error) {
<<<<<<< HEAD
    console.error("Error initializing app:", error);
=======
    console.error('Error initializing app:', error);
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    throw error;
  }
};

export default initApp;
