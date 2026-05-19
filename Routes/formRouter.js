import formController from "../Controllers/formController.js";
import { Router } from "express";
import { getformController } from "../Controllers/formController.js";
const formRouter = Router()

formRouter.post("/", formController )

formRouter.get("/",getformController)

export default formRouter

