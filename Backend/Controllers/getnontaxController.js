const pool = require("../Postgres DB/DB").pool;


const getnontaxRevenue = async (req,res) => {
    try {
        const  sector_name = req.params.sector_name;
        const nontaxRevenue = await pool.query("select Revenue_id, Revenue.Sector_id, Revenue.Revenue_Source_id, Amount, Collection_date, Sector_name, Source_name from Revenue inner join Revenue_source on Revenue.Revenue_Source_id = Revenue_source.Revenue_Source_id inner join Jurisdiction on Revenue.Sector_id = Jurisdiction.Sector_id where Jurisdiction.Sector_name ilike $1;", [`${sector_name}%`]);
        if(nontaxRevenue.rowCount > 0){
            res.status(200).json(nontaxRevenue.rows);
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
    getnontaxRevenue
}