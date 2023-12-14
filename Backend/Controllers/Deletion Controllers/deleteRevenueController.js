const pool = require("../../Postgres DB/DB").pool;

const deleteRevenue = async (req, res) => {
    try {
        const Revenue_id = req.params.Revenue_id;

        // Delete Respective Payment
        const paymentResult = await pool.query("delete from Payment where Revenue_id = $1", [Revenue_id]);

        if (paymentResult.rowCount === 0) {
            // No payment records found for the given Revenue_id
            res.status(404).json("No payment records found for the given Revenue_id");
            return;
        }

        // Delete Respective Revenue record
        const revenueResult = await pool.query("delete from Revenue where Revenue_id = $1", [Revenue_id]);

        if (revenueResult.rowCount === 0) {
            // No Revenue record found for the given Revenue_id
            res.status(404).json("No Revenue record found for the given Revenue_id");
            return;
        }

        res.status(200).json("Successfully Deleted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    deleteRevenue
};
