const express = require('express');
const router = express.Router("../Controllers/expenditureController");
const expenditureController = require();

router.get("/expenditure", expenditureController);

router.post("/expenditure", expenditureController);

module.exports = router;