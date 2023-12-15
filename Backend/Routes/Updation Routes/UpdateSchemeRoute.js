const express = require("express");
const router = express.Router();
const updateScheme = require("../../Controllers/Updation Controllers/UpdateSchemeController");

router.post("/admin/updatescheme", updateScheme.updateScheme);


module.exports = router;