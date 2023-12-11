const express = require("express");
const router = express.Router();
const nontaxRevenueController = require("../Controllers/getnontaxController");

router.get("/nontaxrevenue/:sector_name", nontaxRevenueController.getnontaxRevenue);


module.exports = router;