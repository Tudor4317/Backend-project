import { getForm } from "../db/methods.js"

export async function homeController(req,res){


    await getForm()
    res.render("index",{user: req.user})


}