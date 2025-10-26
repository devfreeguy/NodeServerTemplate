<<<<<<< HEAD
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface TokenPayload {
  userId: any;
  email?: any;
  phoneNumber?: string;
}

export interface AdminTokenPayload {
  adminId: any;
  email: string;
  role: "admin" | "subAdmin";
}

const SECRET_KEY = process.env.SECRET_KEY || "secret";
=======
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export interface TokenPayload {
  userId: any
  email?: any
  phoneNumber?: string
}

export interface AdminTokenPayload {
  adminId: any
  email: string
  role: 'admin' | 'subAdmin'
}

const SECRET_KEY = process.env.SECRET_KEY || 'secret'
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

function generateToken(payload: TokenPayload): string {
  const tokenPayload: TokenPayload = {
    userId: payload.userId,
    email: payload.email,
<<<<<<< HEAD
  };

  return jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: "1d" }); // Use tokenPayload here
=======
  }

  return jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: '1d' }) // Use tokenPayload here
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
}

function generateAdminToken(payload: AdminTokenPayload): string {
  const tokenPayload: AdminTokenPayload = {
    adminId: payload.adminId,
    email: payload.email,
    role: payload.role,
<<<<<<< HEAD
  };

  return jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: "30d" });
}

function verifyToken(
  token: string
): { userId: string } | object | string | undefined {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}

export { generateToken, generateAdminToken, verifyToken };
=======
  }

  return jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: '30d' })
}

function verifyToken(token: string): { userId: string } | object | string | undefined {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (error) {
    throw new Error('Invalid or expired token')
  }
}

export { generateToken, generateAdminToken, verifyToken }
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
