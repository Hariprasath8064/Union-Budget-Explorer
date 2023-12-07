// Dependencies:
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
const pool = require("../Union-Budget-Explorer/Postgres DB/DB"); // SetUp Postgres Database 


//Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/Public/"));


//const homepageRoute = require("./Routes");
//app.use("/", homepageRoutes);


// Expenditure Routes
const getallexpenditureRoute = require("./Routes/expenditureRoutes");
app.use("/", getallexpenditureRoute); 


// Non-Tax Revenue Routes
const getallnontaxRevenue = require("./Routes/getallnontaxRoutes");
app.use("/", getallnontaxRevenue);


// Server Setup
const port = process.env.PORT || 5000;

app.listen(port, (req,res) => {
    console.log("Server Is Listening on Port " + port + "....");
})

