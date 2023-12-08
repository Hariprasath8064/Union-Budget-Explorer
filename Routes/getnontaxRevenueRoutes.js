const express = require("express");
const router = express.Router();
const nontaxRevenueController = require("../Controllers/getnontaxController");

router.get("/nontaxrevenue/:searchterm", nontaxRevenueController.getnontaxRevenue);


module.exports = router;