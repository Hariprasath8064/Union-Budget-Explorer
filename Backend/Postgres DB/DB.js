const Pool = require('pg').Pool;


const pool = new Pool({
    user: "postgres",
    password: "2005",
    host: "localhost",
    port: 5432,
    database: "Non-Tax Revenue"
});

module.exports = {pool};