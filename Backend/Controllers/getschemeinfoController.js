const pool = require("../Postgres DB/DB").pool;


const getSchemeinfo = async (req,res) => {
    try {
        const scheme_info = await pool.query("select Scheme.Scheme_name, Scheme_objective.Objective_description from Scheme inner join Scheme_objective on Scheme.Objective_id = Scheme_objective.Objective_id;");
        if(scheme_info.rowCount > 0){
            res.status(200).json(scheme_info.rows);
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
    getSchemeinfo
}