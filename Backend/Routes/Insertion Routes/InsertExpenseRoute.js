const express = require("express");
const router = express.Router();
const InsertExpense = require("../../Controllers/Insertion Controllers/InsertExpenseController");

router.post("/admin/insertexpense", InsertExpense.InsertExpense);


module.exports = router;