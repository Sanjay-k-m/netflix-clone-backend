import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *  post:
 *    summary: Sign up a new user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      201:
 *        description: User created successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                message:
 *                  type: string
 *                user:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                    username:
 *                      type: string
 *                    email:
 *                      type: string
 *                    image:
 *                      type: string
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                message:
 *                  type: string
 */
router.post("/signup", signup);

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: User logged in successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                message:
 *                  type: string
 *                user:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                    username:
 *                      type: string
 *                    email:
 *                      type: string
 *                    image:
 *                      type: string
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                message:
 *                  type: string
 */
router.post("/login", login);

/**
 * @swagger
 * /auth/logout:
 *  post:
 *    summary: Logout a user
 *    responses:
 *      200:
 *        description: User logged out successfully
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                message:
 *                  type: string
 *      400:
 *        description: Bad request
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                message:
 *                  type: string
 */
router.post("/logout", logout);

export default router;

