/* eslint-disable @typescript-eslint/no-unsafe-call */
<<<<<<< HEAD
import chalk from "chalk";
=======
import chalk from 'chalk';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

//custom error and info logging to the console.
//Classes of color for different console message

export default class Logging {
  public static log = (arg: unknown) => this.info(arg);

  public static info = (arg: unknown) =>
    console.log(
      chalk.blue(`[${new Date().toISOString()}] [info]`),
<<<<<<< HEAD
      typeof arg === "string" ? chalk.blueBright(arg) : arg
    );

  public static warn = (arg: unknown) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}] [warn]`),
      typeof arg === "string" ? chalk.yellowBright(arg) : arg
=======
      typeof arg === 'string' ? chalk.blueBright(arg) : arg,
  );

  public static warn = (arg: unknown) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}] [info]`),
      typeof arg === 'string' ? chalk.yellowBright(arg) : arg,
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    );

  public static error = (arg: unknown) =>
    console.log(
<<<<<<< HEAD
      chalk.red(`[${new Date().toLocaleString()}] [error]`),
      typeof arg === "string" ? chalk.redBright(arg) : arg
=======
      chalk.red(`[${new Date().toLocaleString()}] [info]`),
      typeof arg === 'string' ? chalk.redBright(arg) : arg,
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    );
}
