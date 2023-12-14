const pool = require("../../Postgres DB/DB").pool;


const updateExpense = async (req,res) => {
    try {
        const Expensedata = req.body;

        await pool.query("update Expense set Amount = $1 where Expense_id = $2;", [Expensedata.Amount, Expensedata.Expense_id]);
        await pool.query("update Expense set Expense_date = $1 where Expense_id = $2;", [Expensedata.Expense_date, Expensedata.Expense_id]);

        res.status(200).send("Updated Successfully..");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error..");
    }
}

module.exports = {
    updateExpense
}