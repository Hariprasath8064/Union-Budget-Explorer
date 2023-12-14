const express = require("express");
const router = express.Router();
const deleteRevenue = require("../../Controllers/Deletion Controllers/deleteRevenueController");

router.get("/admin/deleterevenue/:Revenue_id", deleteRevenue.deleteRevenue);


module.exports = router;