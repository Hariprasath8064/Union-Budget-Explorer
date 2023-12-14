const express = require("express");
const router = express.Router();
const updateExpense = require("../../Controllers/Updation Controllers/UpdateExpenseController");

router.get("/admin/updateexpense", updateExpense.updateExpense);


module.exports = router;