const pool = require("../Postgres DB/DB").pool;


const getExpenditure = async (req,res) => {
    try {
        const expenditure = await pool.query();
        res.status(200).json(expenditure);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getExpenditure
}