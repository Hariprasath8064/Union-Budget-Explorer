const express = require("express");
const router = express.Router();
const deleteRevenue = require("../../Controllers/Deletion Controllers/deleteRevenueController");

router.post("/admin/deleterevenue/:Revenue_id", deleteRevenue.deleteRevenue);


module.exports = router;