const pool = require("../../Postgres DB/DB").pool;


const InsertExpense = async (req,res) => {
    try {
        const ExpenseData = req.body;

        await pool.query("insert into Expense_category values ($1, $2);", [ExpenseData.Category_id, ExpenseData.Category_name], (err,result) => {
            if(err){
                console.log(err);
                res.status(404).end("Insertion Failed!! Data is not clean");
            }
            else{
                console.log(result);
            }
        });


        await pool.query("insert into Expense values ($1, $2, $3, $4, $5);", [ExpenseData.Expense_id, ExpenseData.Sector_id, ExpenseData.Category_id, ExpenseData.Amount, ExpenseData.ExpenseData], (err, res) => {
            if(err){
                console.log(err);
                res.status(404).send("Insertion Failed!! Data is not clean");
            }
            else{
                console.log(res);
            }
        })

        res.status(200).end("Inserted Successfully..");

    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error..");
    }
}

module.exports = {
    InsertExpense
}