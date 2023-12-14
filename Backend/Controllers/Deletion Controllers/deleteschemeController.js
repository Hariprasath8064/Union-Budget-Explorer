const pool = require("../../Postgres DB/DB").pool;

const deleteScheme = async (req, res) => {
    try {
        const Scheme_id = req.params.Scheme_id;

        // Delete Respective Budget_Allocation record
        const allocationResult = await pool.query("delete from Budget_allocation where Scheme_id = $1;", [Scheme_id]);

        if (allocationResult.rowCount === 0) {
            // No Budget_Allocation record found for the given Scheme_id
            res.status(404).json("No Budget_Allocation record found for the given Scheme_id");
            return;
        }

        // Delete Respective Scheme
        const schemeResult = await pool.query("delete from Scheme where Scheme_id = $1;", [Scheme_id]);

        if (schemeResult.rowCount === 0) {
            // No Scheme record found for the given Scheme_id
            res.status(404).json("No Scheme record found for the given Scheme_id");
            return;
        }

        res.status(200).json("Successfully Deleted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    deleteScheme
};
