<<<<<<< HEAD
import bcrypt from "bcryptjs";
=======
import bcrypt from 'bcryptjs';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

async function hashPassword(passcode: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(passcode, salt);
}

<<<<<<< HEAD
async function comparePassword(
  passcode: string,
  hashedPassword: string
): Promise<boolean> {
=======
async function comparePassword(passcode: string, hashedPassword: string): Promise<boolean> {
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
  return bcrypt.compare(passcode, hashedPassword);
}

export { hashPassword, comparePassword };
