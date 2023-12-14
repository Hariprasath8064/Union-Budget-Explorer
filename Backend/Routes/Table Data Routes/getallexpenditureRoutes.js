const express = require("express");
const router = express.Router();
const expenditureController = require("../../Controllers/Table Data Contollers/getallexpenditureController");

router.get("/expenditure", expenditureController.getallExpenditure);


module.exports = router;