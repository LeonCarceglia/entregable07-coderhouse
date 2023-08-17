import { Router } from "express"
import passport from "passport"
import userController from "../controllers/users.controller.js"

const router = Router()

router.post(
    "/register",
    passport.authenticate("register", { failureRedirect: "/failureRedirect" }),
    userController.registerUser)

router.post(
  "/login",
  passport.authenticate("login", { failureRedirect: "/failureRedirect" }),
  userController.loginUser)

router.get("/current", userController.currentUser)

router.get("/github", passport.authenticate("github"), userController.github)

router.get(
  "/githubcallback",
  passport.authenticate("github"),
  userController.githubCallback)

export default router