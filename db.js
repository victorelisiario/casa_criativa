const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function () {
    //Criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            tittle TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        ); 
    `)
})
module.exports = db