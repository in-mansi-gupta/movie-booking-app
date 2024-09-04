import express, { Router } from "express";
import { getAllUsers } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

export default userRouter;