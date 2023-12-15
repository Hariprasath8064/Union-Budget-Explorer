const express = require("express");
const router = express.Router();
const InsertScheme = require("../../Controllers/Insertion Controllers/InsertSchemeController");

router.post("/admin/insertscheme", InsertScheme.InsertScheme);


module.exports = router;