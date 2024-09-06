import express from "express";
import { adminSignup,  adminLogin } from "../controllers/admin-controller.js";

const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin)

export default adminRouter;