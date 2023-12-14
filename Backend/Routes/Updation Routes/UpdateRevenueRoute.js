const express = require("express");
const router = express.Router();
const updateRevenue = require("../../Controllers/Updation Controllers/UpdateRevenueController");

router.post("/admin/updaterevenue", updateRevenue.updateRevenue);


module.exports = router;