const express = require("express");
const router = express.Router();
const schemeController = require("../Controllers/getallschemeController");

router.get("/scheme", schemeController.getallScheme);


module.exports = router;