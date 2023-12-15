const pool = require("../../Postgres DB/DB").pool;


const InsertRevenue = async (req,res) => {
    try {
        const Revenuedata = req.body;

        await pool.query("insert into Revenue_source values ($1, $2);", [Revenuedata.Revenue_Source_id, Revenuedata.Source_name], (err,result) => {
            if(err){
                console.log(err);
                res.status(404).end("Insertion Failed!! Data is not clean");
            }
            else{
                console.log(result);
            }
        });


        await pool.query("insert into Revenue values ($1, $2, $3, $4, $5);", [Revenuedata.Revenue_id, Revenuedata.Sector_id, Revenuedata.Revenue_Source_id, Revenuedata.Amount, Revenuedata.Collection_date], (err, res) => {
            if(err){
                console.log(err);
                res.status(404).end("Insertion Failed!! Data is not Clean");
            }
            else{
                console.log(res);
            }
        })

        res.status(200).send("Inserted Successfully..");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error..");
    }
}

module.exports = {
    InsertRevenue
}