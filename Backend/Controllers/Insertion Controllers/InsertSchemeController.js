const pool = require("../../Postgres DB/DB").pool;


const InsertScheme = async (req,res) => {
    try {
        const Schemedata = req.body;
        console.log(req.body);

        await pool.query("insert into Schemeobjective values ($1, $2);", [Schemedata.Objective_id, Schemedata.Objective_description], (err,result) => {
            if(err){
                console.log(err);
                res.status(404).end("Insertion Failed. Data is not clean");
            }
            else{
                console.log(result);
            }
        });


        await pool.query("insert into Scheme values ($1, $2, $3, $4, $5);", [Schemedata.Scheme_id, Schemedata.Objective_id, Schemedata.Scheme_name, Schemedata.Start_year, Schemedata.End_year], (err, result) => {
            if(err){
                console.log(err);
                res.status(404).end("Insertion Failed!!. Data is not Clean");
            }
            else{
                console.log(result);
            }
        })

        res.status(200).end("Inserted Successfully..");

    } catch (err) {
        console.log(err);
        res.status(500).end("Internal Server Error..");
    }
}

module.exports = {
    InsertScheme
}