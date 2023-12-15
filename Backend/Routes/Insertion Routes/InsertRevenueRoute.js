const express = require("express");
const router = express.Router();
const InsertRevenue = require("../../Controllers/Insertion Controllers/InsertRevenueController");

router.post("/admin/insertrevenue", InsertRevenue.InsertRevenue);


module.exports = router;