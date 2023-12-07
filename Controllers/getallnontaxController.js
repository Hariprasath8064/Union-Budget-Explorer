const pool = require("../Postgres DB/DB").pool;


const getallnontaxRevenue = async (req,res) => {
    try {
        const nontaxRevenue = await pool.query("select Revenue_id, Revenue.Sector_id, Revenue.Revenue_Source_id, Amount, Collection_date, Sector_name, Source_name from Revenue inner join Revenue_source on Revenue.Revenue_Source_id = Revenue_source.Revenue_Source_id inner join Jurisdiction on Revenue.Sector_id = Jurisdiction.Sector_id order by Revenue.Revenue_id;");
        if(nontaxRevenue.rowCount > 0){
            res.status(200).json(nontaxRevenue.rows);
        }
        else{
            res.send("No Records Found");
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getallnontaxRevenue
}