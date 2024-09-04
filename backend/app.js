import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRouter from "./routes/user-routes.js";

dotenv.config();
const app = express();

//      middlewares
app.use(express.json());
app.use("/user", userRouter);


mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.zrl2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
).then(() =>
    app.listen(5000, () => 
        console.log("Connected to database and the server is running")
    )
).catch(e => 
    console.log(e)
);

