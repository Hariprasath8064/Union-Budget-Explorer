const express = require("express");
const router = express.Router();
const schemeController = require("../Controllers/getschemeController");

router.get("/scheme/:searchterm", schemeController.getScheme);


module.exports = router;