<<<<<<< HEAD
import express from "express";
import {
  adminSignup,
  adminLogin,
} from "../../controllers/admin/auth.controller.js";
=======
import express from 'express';
import { adminSignup, adminLogin } from '../../controllers/admin/auth.controller';
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e

const router = express.Router();

// @route   POST /api/v1/admin/auth/signup
<<<<<<< HEAD
router.post("/create-admin", adminSignup);

// @route   POST /api/v1/admin/auth/login
router.post("/admin-login", adminLogin);

export default router;
=======
router.post('/create-admin', adminSignup);

// @route   POST /api/v1/admin/auth/login
router.post('/admin-login', adminLogin);

export default router;
>>>>>>> 5f2ffcf592d3f294dfb2abefecce7b665af77d2e
