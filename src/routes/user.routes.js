import express from 'express';
const router = express.Router();
import { registerUser } from "../controllers/user.controller.js";

router.route("/register").post(registerUser);



export default router; // Export the router module as default
