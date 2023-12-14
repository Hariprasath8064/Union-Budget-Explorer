const express = require("express");
const router = express.Router();
const schemeController = require("../../Controllers/Table Data Contollers/getallschemeController");

router.get("/scheme", schemeController.getallScheme);


module.exports = router;