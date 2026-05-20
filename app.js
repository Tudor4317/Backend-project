import express from "express"
import homeRouter from "./Routes/homeRouter.js"
import passport from "passport"
import session from "express-session"
import LocalStrategy from "passport-local"
import formRouter from "./Routes/formRouter.js"
import pool from "./db/pool1.js"
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/",homeRouter)
app.use("/sign-up",formRouter)
app.set('Views', process.env.VIEWS)
app.set("view engine", "ejs")

passport.use(
    new LocalStrategy(async (username,password, done) =>{
        try{
            const {rows} = pool.query("SELECT * FROM userdb WHERE username = $1", [username])
            const user = rows[0]
            if (!user) {
                return done(null,false, {message: "Incorrect username"})
                if(user.password !== password){
                    return done(null,false,{message: "Incorrect password"})

                }
                return done(null,user)

            }
        }
            catch(error){
                return done(err)
            }
        }
    })
)


const PORT = 3000
app.listen(PORT ,(error) =>{
    if(error){
        console.error(error)
        return
    }

    console.log(`Running on port ${PORT}`)
})