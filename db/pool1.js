import {Pool} from "pg"

const {USER, HOST, DATABASE,PASSWORD,PORT} = process.env

const pool = new Pool({
    user: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    port: PORT 


})

export default pool 
