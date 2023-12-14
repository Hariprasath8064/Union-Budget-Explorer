const pool = require("../../Postgres DB/DB").pool;


const getallScheme = async (req,res) => {
    try {
        const scheme = await pool.query("select Scheme.Scheme_id, Scheme.Scheme_name, Budget_allocation.Allocated_amount, Scheme.Start_year, Scheme.End_year from Scheme inner join Scheme_objective on Scheme.Objective_id = Scheme_objective.Objective_id inner join Budget_allocation on Budget_allocation.Scheme_id = Scheme.Scheme_id;");
        if(scheme.rowCount > 0){
            res.status(200).json(scheme.rows);
        }
        else{
            res.send("No Records Found");
        }
    } catch (err) {
        res.status(500).send("Internal Server Error..");
        console.log(err);
    }
}

module.exports = {
    getallScheme
}