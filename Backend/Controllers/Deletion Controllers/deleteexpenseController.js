const pool = require("../../Postgres DB/DB").pool;


const deleteExpense = async (req,res) => {
    try {
        const Expense_id = req.params.Expense_id;

        // Delete Respective Expense record
        const result = await pool.query("delete from Expense where Expense_id = $1", [Expense_id]);
        const Categoryresult = await pool.query("select Category_id from Expense where Expense_id = $1;", [Expense_id]);

        const Category_id = Categoryresult.rows[0].Category_id;

        await pool.query("delete from Expense_category where Category_id = $1;", [Category_id]);

        const Sectorresult = await pool.quary("select Sector_id from Expense where Expense_id = $1;", [Expense_id]);
        const Sector_id = Sectorresult.rows[0].Sector_id;

        await pool.query("delete from Jurisdiction where Sector_id = $1;", [Sector_id]);
        
        if(result.rowCount === 0){
            res.status(404).json("Expense record not found for given Expense_id");
        }
        else{
            res.status(200).json("Successfuly Deleted..");
        }

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error..");
    }
}

module.exports = {
    deleteExpense
}