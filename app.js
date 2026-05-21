import express from "express"
import homeRouter from "./Routes/homeRouter.js"
import passport from "passport"
import session from "express-session"
import {Strategy as LocalStrategy} from "passport-local"
import formRouter from "./Routes/formRouter.js"
import pool from "./db/pool1.js"
import loginRouter from "./Routes/loginRouter.js"
import logoutRouter from "./Routes/logoutRouter.js"
import bcrypt from "bcryptjs"
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());


passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const { rows } = await pool.query(
                "SELECT * FROM users WHERE username = $1",
                [username]
            );

            const user = rows[0];

            if (!user) {
                return done(null, false);
            }

            const match = await bcrypt.compare(password,user.password)

        if(!match){
            return done(null,false,{message: "Incoreect password !"})
        }

        return done(null, user);

        } catch (error) {
            return done(error);
        }
    })
);

passport.serializeUser((user,done) =>{
    done(null,user.id)
})

passport.deserializeUser(async (id,done) =>{
    try{
        const {rows} = await pool.query("SELECT * FROM users WHERE id = $1", [id])
        const user = rows[0]
        done(null,user)
    }
    catch(err){
        done(err)
    }
})

app.set('views', process.env.VIEWS)
app.set("view engine", "ejs")


app.use("/",homeRouter)
app.use("/sign-up",formRouter)
app.use("/log-in",loginRouter)
app.use("/log-out", logoutRouter)




const PORT = 3000
app.listen(PORT ,(error) =>{
    if(error){
        console.error(error)
        return
    }

    console.log(`Running on port ${PORT}`)
})