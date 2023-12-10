const express = require("express");
const router = express.Router();
const nontaxController = require("../Controllers/getallnontaxController");

router.get("/nontaxrevenue", nontaxController.getallnontaxRevenue);


module.exports = router;