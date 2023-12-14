const express = require("express");
const router = express.Router();
const deleteRevenue = require("../../Controllers/Deletion Controllers/deleteRevenueController");

router.get("/deleterevenue", deleteRevenue.deleteRevenue);


module.exports = router;