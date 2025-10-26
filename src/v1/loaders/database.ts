<<<<<<< HEAD
import mongoose, { ConnectOptions } from "mongoose";
import { DB_CONNECTION } from "../config/config.js";
import Logging from "../config/logging.js";

const connectToDatabase = async (): Promise<mongoose.Connection> => {
  try {
    const connection = await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    Logging.info("Connected to MongoDB");
    return connection.connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
=======
import mongoose, { ConnectOptions } from 'mongoose';
import { DB_CONNECTION } from '../config/config';
import Logging from '../config/logging'

const connectToDatabase = async (): Promise<mongoose.Connection> => {
  try {
     const connection = await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    Logging.info('Connected to MongoDB');
    return connection.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    throw error;
  }
};

export default connectToDatabase;
