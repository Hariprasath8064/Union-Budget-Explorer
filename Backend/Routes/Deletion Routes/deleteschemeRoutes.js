const express = require("express");
const router = express.Router();
const deleteScheme = require("../../Controllers/Deletion Controllers/deleteschemeController");

router.get("/deletescheme", deleteScheme.deleteScheme);


module.exports = router;