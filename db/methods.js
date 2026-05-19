import pool from "./pool1.js"

export async function sumbitForm(username,password){

    await pool.query("INSERT INTO users (username,password) VALUES($1,$2)",[username,password])

}

export async function getForm(){
    const {rows} = await pool.query("SELECT * FROM users")
    console.log(rows)

}