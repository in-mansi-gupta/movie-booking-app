import express from "express";
import { addMovie } from "../controllers/movie-controller.js";

const movieRouter = express.Router();

movieRouter.post("/", addMovie);

export default movieRouter;