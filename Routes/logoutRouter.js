
import { Router } from "express";
import logoutController from "../Controllers/logoutController.js";
const logoutRouter = Router()


logoutRouter.get("/", logoutController)

export default logoutRouter