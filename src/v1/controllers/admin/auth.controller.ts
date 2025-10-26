// src/v1/controllers/admin/auth.controller.ts
<<<<<<< HEAD
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Admin from "../../models/admin/admin.model.js";
import { generateAdminToken } from "../../utils/jwt.utils.js";
=======
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Admin from '../../models/admin/admin.model';
import { generateAdminToken } from '../../utils/jwt.utils';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

export const adminSignup = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    if (!email || !password || !firstName || !lastName) {
<<<<<<< HEAD
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
=======
      return res.status(400).json({ message: 'All required fields must be provided' });
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    }

    const existing = await Admin.findOne({ email });
    if (existing) {
<<<<<<< HEAD
      return res.status(409).json({ message: "Admin already exists" });
=======
      return res.status(409).json({ message: 'Admin already exists' });
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
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
<<<<<<< HEAD
    return res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
=======
    return res.status(201).json({ message: 'Admin created successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Server error' });
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
  }
};

export const adminLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
<<<<<<< HEAD
      return res
        .status(400)
        .json({ message: "Email and password are required" });
=======
      return res.status(400).json({ message: 'Email and password are required' });
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
<<<<<<< HEAD
      return res.status(404).json({ message: "Admin not found" });
=======
      return res.status(404).json({ message: 'Admin not found' });
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
<<<<<<< HEAD
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
=======
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateAdminToken({
        adminId: admin._id, email,
        role: 'admin'
    });
    return res.status(200).json({ message: 'Welcome Admin', token, admin });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
