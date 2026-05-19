import { sumbitForm } from "../db/methods.js";

export default async function formController(req,res){
    try{ 
        const {username, password} = req.body
        sumbitForm(username,password)
        res.redirect("/")

    }

    catch(error){
        console.error(error)
    }

}

export function getformController(req,res){
    res.render("sign-up-form",{})
}

