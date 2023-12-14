const pool = require("../../Postgres DB/DB").pool;


const updateRevenue = async (req,res) => {
    try {
        const Revenuedata = req.body;

        await pool.query("update Revenue set Amount = $1 where Revenue_id = $2;", [Revenuedata.Amount, Revenuedata.Revenue_id]);
        await pool.query("update Revenue set Collection_date = $1 where Revenue_id = $2;", [Revenuedata.Collection_date, Revenuedata.Revenue_id]);
        res.status(200).send("Updated Successfully..");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error..");
    }
}

module.exports = {
    updateRevenue
}