const express = require("express");
const router = express.Router();
const expenditureController = require("../Controllers/expenditureController");

router.get("/expenditure", expenditureController.getallExpenditure);


module.exports = router;