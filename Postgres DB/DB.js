const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Naganathan@15",
    host: "localhost",
    port: 5432,
    database: "Non-Tax Revenue"
});

module.exports = pool;