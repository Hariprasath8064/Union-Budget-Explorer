const express = require("express");
const router = express.Router();
const getSchemeinfoController = require("../Controllers/getschemeinfoController");

router.get("/objective", getSchemeinfoController.getSchemeinfo);


module.exports = router;