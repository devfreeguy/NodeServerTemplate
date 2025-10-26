<<<<<<< HEAD
import Joi from "joi";

const envVarSchema = Joi.object({
  DB_CONNECTION: Joi.string().required(),
  PORT: Joi.number().positive().default(3000),
}).unknown();
=======
import Joi from 'joi';

const envVarSchema = Joi
  .object({
    DB_CONNECTION: Joi.string().required(),
    PORT: Joi.number().positive().default(3000),
  })
  .unknown();
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

export default envVarSchema;
