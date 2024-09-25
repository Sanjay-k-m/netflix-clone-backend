import express from "express";
import {
  getTredningMovie,
  getMoviewTrailers,
  getMovieDetails,
} from "../controllers/movie.controler.js";

const router = express.Router();

router.get("/trending", getTredningMovie);
router.get("/:id/trailers", getMoviewTrailers);
router.get("/:id/details", getMovieDetails);



export default router;
