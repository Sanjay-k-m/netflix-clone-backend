import express from "express";
import {
  getSearchHistory,
  removeItemFromSearchHistory,
  searchMovie,
  searchPerson,
  searchTv,
} from "../controllers/search.controller.js";

const router = express.Router();

/**
 * @swagger
 * /search/person/{query}:
 *  get:
 *    summary: Search for a person
 *    parameters:
 *      - in: path
 *        name: query
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search results
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Person'
 */
router.get("/person/:query", searchPerson);

/**
 * @swagger
 * /search/movie/{query}:
 *  get:
 *    summary: Search for a movie
 *    parameters:
 *      - in: path
 *        name: query
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search results
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Movie'
 */
router.get("/movie/:query", searchMovie);

/**
 * @swagger
 * /search/tv/{query}:
 *  get:
 *    summary: Search for a TV show
 *    parameters:
 *      - in: path
 *        name: query
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Search results
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/TV'
 */
router.get("/tv/:query", searchTv);

/**
 * @swagger
 * /search/history:
 *  get:
 *    summary: Get search history
 *    responses:
 *      200:
 *        description: Search history
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/SearchHistoryItem'
 */
router.get("/history", getSearchHistory);

/**
 * @swagger
 * /search/history/{id}:
 *  delete:
 *    summary: Remove an item from search history
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Item removed from search history
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 */
router.delete("/history/:id", removeItemFromSearchHistory);

export default router;

