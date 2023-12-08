const pool = require("../Postgres DB/DB").pool;


const getexpenditure = async (req,res) => {
    try {
        const  sector_name = req.params.sector_name;
        const expenditure = await pool.query("select Expense_id, Expense.Sector_id, Expense.Category_id, Amount, Expense_date, Jurisdiction.Sector_name, Expense_category.Category_name from Expense inner join Jurisdiction on Expense.Sector_id = Jurisdiction.Sector_id inner join Expense_category on Expense_category.Category_id = Expense.Category_id where Jurisdiction.Sector_name ilike $1;", [`${sector_name}%`]);
        if(expenditure.rowCount > 0){
            res.status(200).json(expenditure.rows);
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
    getexpenditure
}