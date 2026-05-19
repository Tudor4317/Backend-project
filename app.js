import express from "express"
import homeRouter from "./Routes/homeRouter.js"
import passport from "passport"
import session from "express-session"
import LocalStrategy from "passport-local"
import formRouter from "./Routes/formRouter.js"

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/",homeRouter)
app.use("/sign-up",formRouter)
app.set('Views', process.env.VIEWS)
app.set("view engine", "ejs")

const PORT = 3000
app.listen(PORT ,(error) =>{
    if(error){
        console.error(error)
        return
    }

    console.log(`Running on port ${PORT}`)
})