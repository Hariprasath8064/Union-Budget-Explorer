const express = require("express");
const router = express.Router();
const nontaxController = require("../../Controllers/Table Data Contollers/getallnontaxController");

router.get("/nontaxrevenue", nontaxController.getallnontaxRevenue);


module.exports = router;