// src/v1/controllers/admin/auth.controller.ts
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Admin from "../../models/admin/admin.model.js";
import { generateAdminToken } from "../../utils/jwt.utils.js";

export const adminSignup = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!email || !password || !firstName || !lastName) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role: "admin",
    });

    // const token = generateAdminToken({ userId: admin._id, email });
    return res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateAdminToken({
      adminId: admin._id,
      email,
      role: "admin",
    });
    return res.status(200).json({ message: "Welcome Admin", token, admin });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
