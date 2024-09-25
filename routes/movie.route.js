import express from "express";
import {
  getTredningMovie,
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMoviesByCategory,
} from "../controllers/movie.controler.js";
const router = express.Router();

/**
 * @swagger
 * /movie/trending:
 *  get:
 *    summary: Get trending movies
 *    responses:
 *      200:
 *        description: Trending movies
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                content:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Movie'
 */
router.get("/trending", getTredningMovie);

/**
 * @swagger
 * /movie/{id}/trailers:
 *  get:
 *    summary: Get movie trailers by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Movie trailers
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                trailers:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Trailer'
 */
router.get("/:id/trailers", getMovieTrailers);

/**
 * @swagger
 * /movie/{id}/details:
 *  get:
 *    summary: Get movie details by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Movie details
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                content:
 *                  $ref: '#/components/schemas/Movie'
 */
router.get("/:id/details", getMovieDetails);

/**
 * @swagger
 * /movie/{id}/similar:
 *  get:
 *    summary: Get similar movies by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Similar movies
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                similar:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Movie'
 */
router.get("/:id/similar", getSimilarMovies);

/**
 * @swagger
 * /movie/{category}:
 *  get:
 *    summary: Get movies by category
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Movies by category
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                content:
 *                  type: array
 *                  items:
 *                    $ref: '#/components/schemas/Movie'
 */
router.get("/:category", getMoviesByCategory);

export default router;

