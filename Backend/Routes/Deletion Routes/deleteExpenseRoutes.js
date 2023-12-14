const express = require("express");
const router = express.Router();
const deleteExpense = require("../../Controllers/Deletion Controllers/deleteexpenseController");

router.get("/deleteexpense", deleteExpense.deleteExpense);


module.exports = router;