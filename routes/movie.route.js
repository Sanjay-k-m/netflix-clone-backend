import express from "express";
import {
  getTredningMovie,
  getMoviewTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMoviesByCategory,
} from "../controllers/movie.controler.js";

const router = express.Router();

router.get("/trending", getTredningMovie);
router.get("/:id/trailers", getMoviewTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;
