import { sumbitForm } from "../db/methods.js";
import bcrypt from "bcryptjs"
export default async function formController(req,res){
    try{ 
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const {username} = req.body
        sumbitForm(username,hashedPassword)
        res.redirect("/")

    }

    catch(error){
        console.error(error)
    }

}

export function getformController(req,res){
    res.render("sign-up-form",{})
}

