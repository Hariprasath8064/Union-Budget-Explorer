const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PWD,
    host: "localhost",
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

module.exports = {pool};