import { Router } from "express";
import loginController from "../Controllers/loginController.js";
import passport from "passport";

const loginRouter = Router()

loginRouter.get("/",loginController)
loginRouter.post("/",passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in"
}))


export default loginRouter