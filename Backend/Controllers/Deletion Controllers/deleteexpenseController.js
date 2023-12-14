const pool = require("../../Postgres DB/DB").pool;


const deleteExpense = async (req,res) => {
    try {
        const Expense_id = req.params.Expense_id;

        // Delete Respective Expense record
        const result = await pool.query("delete from Expense where Expense_id = $1", [Expense_id]);
        
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