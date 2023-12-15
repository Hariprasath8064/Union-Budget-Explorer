const pool = require("../../Postgres DB/DB").pool;

const InsertScheme = async (req, res) => {
    try {
        const Schemedata = req.body;
        console.log('Received data:', Schemedata);

        // Insert into Scheme_objective
        await pool.query(
            "INSERT INTO Scheme_objective (Objective_id, Objective_description) VALUES ($1, $2);",
            [Schemedata.Objective_id, Schemedata.Objective_description],
            (err, result) => {
                if (err) {
                    console.error('Error inserting into Scheme_objective:', err);
                    res.status(404).end("Insertion Failed. Data is not clean");
                } else {
                    console.log('Inserted into Scheme_objective:', result);
                }
            }
        );

        // Insert into Scheme
        await pool.query(
            "INSERT INTO Scheme (Scheme_id, Objective_id, Scheme_name, Start_year, End_year) VALUES ($1, $2, $3, $4, $5);",
            [Schemedata.Scheme_id, Schemedata.Objective_id, Schemedata.Scheme_name, Schemedata.Start_year, Schemedata.End_year],
            (err, result) => {
                if (err) {
                    console.error('Error inserting into Scheme:', err);
                    res.status(404).end("Insertion Failed!!. Data is not Clean");
                } else {
                    console.log('Inserted into Scheme:', result);
                }
            }
        );


        await pool.query("insert into Budget_allocation values ($1, $2, $3, $4);", [Schemedata.Allocation_id, Schemedata.Scheme_id, Schemedata.Fiscal_year, Schemedata.Allocated_amount], (err, result) => {
            if(err){
                console.log(err);
                res.status(404).end("Insertion Failed!!. Data is not clean");
            }
            else{
                console.log(result);
            }
        });

        res.status(200).end("Inserted Successfully..");

    } catch (err) {
        console.error('Internal Server Error:', err);
        res.status(500).end("Internal Server Error..");
    }
}

module.exports = {
    InsertScheme
}
