import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.utils.js";
import dotenv from "dotenv";

dotenv.config();

// Define a custom interface that extends Request
interface RequestWithUserData extends Request {
  userData?: { userId: string }; // Adjust the type as needed
}
export interface RequestWithUser extends Request {
  user?: any; // Use any or define a more specific type
}

export interface AuthenticatedRequest extends Request {
  user?: {
    _id: string;
  };
}

export interface AdminRequest extends Request {
  admin?: {
    _id: string;
  };
}

interface DecodedAdminToken {
  adminId: string;
  [key: string]: any;
}

export const adminAuthMiddleware = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer Token
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decodedToken = verifyToken(token) as DecodedAdminToken;

    if (decodedToken && typeof decodedToken.adminId === "string") {
      req.admin = { _id: decodedToken.adminId };
      return next();
    } else {
      return res.status(403).send("Access denied. Not an admin.");
    }
  } catch (error) {
    return res.status(400).send("Invalid token.");
  }
};

//Middleware to check if user is authenticated
// export const isUserAuthenticated = (req: RequestWithUserData, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) {
//       return res.status(401).json({ message: 'Authentication failed' });
//     }
//     const decodedToken = verifyToken(token); // Use your verifyToken function
//     if (decodedToken && typeof decodedToken === "object" && "userId" in decodedToken) {
//       req.userData = { userId: decodedToken.userId }; // Add user data to the request object
//       next();
//     } else {
//       return res.status(401).json({ message: 'Token verification failed' });
//     }
//   } catch (error) {
//     return res.status(401).json({ message: 'Authentication failed', error });
//   }
// };

export const isUserAuthenticated = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const decodedToken = verifyToken(token); // Use your verifyToken function
    if (
      decodedToken &&
      typeof decodedToken === "object" &&
      "userId" in decodedToken
    ) {
      req.user = { _id: decodedToken.userId }; // Add user ID directly to req.user
      next();
    } else {
      return res.status(401).json({ message: "Token verification failed" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed", error });
  }
};
