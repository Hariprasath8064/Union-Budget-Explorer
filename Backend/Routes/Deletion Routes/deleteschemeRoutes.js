const express = require("express");
const router = express.Router();
const deleteScheme = require("../../Controllers/Deletion Controllers/deleteschemeController");

router.get("/admin/deletescheme/:Scheme_id", deleteScheme.deleteScheme);


module.exports = router;