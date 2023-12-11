const express = require("express");
const router = express.Router();
const schemeController = require("../Controllers/getschemeController");

router.get("/scheme/:scheme_name", schemeController.getScheme);


module.exports = router;