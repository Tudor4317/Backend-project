import { Router } from "express";
import { homeController } from "../Controllers/homeController.js";
const homeRouter = Router()

homeRouter.get("/",homeController)

export default homeRouter