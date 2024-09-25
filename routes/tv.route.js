import express from "express";
import {
  getSimilarTvs,
  getTredningTv,
  getTvDetails,
  getTvsByCategory,
  getTvTrailers,
} from "../controllers/tv.controller.js";

const router = express.Router();

/**
 * @swagger
 * /tv/trending:
 *  get:
 *    summary: Get trending TVs
 *    responses:
 *      200:
 *        description: Trending TVs
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
 *                    $ref: '#/components/schemas/TV'
 */
router.get("/trending", getTredningTv);

/**
 * @swagger
 * /tv/{id}/trailers:
 *  get:
 *    summary: Get TV trailers by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: TV trailers
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
router.get("/:id/trailers", getTvTrailers);

/**
 * @swagger
 * /tv/{id}/details:
 *  get:
 *    summary: Get TV details by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: TV details
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                content:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    overview:
 *                      type: string
 *                    poster_path:
 *                      type: string
 *                    vote_average:
 *                      type: number
 */
router.get("/:id/details", getTvDetails);

/**
 * @swagger
 * /tv/{id}/similar:
 *  get:
 *    summary: Get similar TVs by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Similar TVs
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
 *                    $ref: '#/components/schemas/TV'
 */
router.get("/:id/similar", getSimilarTvs);

/**
 * @swagger
 * /tv/{category}:
 *  get:
 *    summary: Get TVs by category
 *    parameters:
 *      - in: path
 *        name: category
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: TVs by category
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
 *                    $ref: '#/components/schemas/TV'
 */
router.get("/:category", getTvsByCategory);

export default router;

