// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge } = require('electron');
// const { addProduct } = require('./database/database');
const sqlite3 = require("sqlite3"); 


contextBridge.exposeInMainWorld('database', {
    addProduct: (data) => {
        const db = new sqlite3.Database('database.db')
        const res = db.run(`INSERT INTO products(name, price) VALUES(${data.name}, ${data.price})`)
        return res
    },
    getAllProducts: () => {
        const db = new sqlite3.Database('database.db')
    }
})