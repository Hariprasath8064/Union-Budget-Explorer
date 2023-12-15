const pool = require("../../Postgres DB/DB").pool;


const updateScheme = async (req,res) => {
    try {
        const  Schemedata  = req.body;

        const Objectiveresult = await pool.query("select Objective_id from Scheme where Scheme_id = $1;", [Schemedata.Scheme_id]);
        const Objective_id = Objectiveresult.rows[0].Objective_id;

        await pool.query("update Scheme_objective set Objective_description = $1 where Objective_id = $2;", [Schemedata.Objective_description, Objective_id]);
        await pool.query("update Scheme set Scheme_name = $1 where Scheme_id = $2;", [Schemedata.Scheme_name, Schemedata.Scheme_id]);
        await pool.query("update Scheme set Start_year = $1 where Scheme_id = $2;", [Schemedata.Start_year, Schemedata.Scheme_id]);
        await pool.query("update Scheme set End_year = $1 where Scheme_id = $2;", [Schemedata.End_year, Schemedata.Scheme_id]);
        await pool.query("update Budget_allocation set Allocated_amount = $1 where Scheme_id = $2;", [Schemedata.Allocated_amount, Schemedata.Scheme_id]);
        res.status(200).send("Updated Successfully..");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error..");
    }
}

module.exports = {
    updateScheme
}