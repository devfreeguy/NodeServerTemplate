import express from "express";
import {
  adminSignup,
  adminLogin,
} from "../../controllers/admin/auth.controller.js";

const router = express.Router();

// @route   POST /api/v1/admin/auth/signup
router.post("/create-admin", adminSignup);

// @route   POST /api/v1/admin/auth/login
router.post("/admin-login", adminLogin);

export default router;
