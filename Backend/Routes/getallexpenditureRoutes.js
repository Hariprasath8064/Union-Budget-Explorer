const express = require("express");
const router = express.Router();
const expenditureController = require("../Controllers/getallexpenditureController");

router.get("/expenditure", expenditureController.getallExpenditure);


module.exports = router;