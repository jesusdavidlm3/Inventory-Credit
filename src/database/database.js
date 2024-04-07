import sqlite3 from "sqlite3"; 
// const sqlite3 = require("sqlite3");

const db = new sqlite3.Database('database.db', (err) => {
    if(err){
        console.log('error')
    }else{
        console.log('bdd conectada')
    }
})

export const addProduct = (data) => {
    db.run('INSERT INTO products(name, price) VALUES(?, ?)', [data.name, data.price], (err) => {
        if(err){
            console.log('error')
        }else{
            console.log('se guardo')
        }
    })
}