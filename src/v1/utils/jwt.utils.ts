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

function generateToken(payload: TokenPayload): string {
  const tokenPayload: TokenPayload = {
    userId: payload.userId,
    email: payload.email,
  };

  return jwt.sign(tokenPayload, SECRET_KEY, { expiresIn: "1d" }); // Use tokenPayload here
}

function generateAdminToken(payload: AdminTokenPayload): string {
  const tokenPayload: AdminTokenPayload = {
    adminId: payload.adminId,
    email: payload.email,
    role: payload.role,
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
