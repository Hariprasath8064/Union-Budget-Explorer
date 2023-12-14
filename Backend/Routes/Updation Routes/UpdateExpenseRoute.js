const express = require("express");
const router = express.Router();
const updateExpense = require("../../Controllers/Updation Controllers/UpdateExpenseController");

router.post("/admin/updateexpense", updateExpense.updateExpense);


module.exports = router;