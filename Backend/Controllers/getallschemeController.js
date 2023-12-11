const pool = require("../Postgres DB/DB").pool;


const getallScheme = async (req,res) => {
    try {
        const scheme = await pool.query("select Expense_id, Expense.Sector_id, Expense.Category_id, Amount, Expense_date, Jurisdiction.Sector_name, Expense_category.Category_name from Expense inner join Jurisdiction on Expense.Sector_id = Jurisdiction.Sector_id inner join Expense_category on Expense_category.Category_id = Expense.Category_id order by Expense.Expense_id;");
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