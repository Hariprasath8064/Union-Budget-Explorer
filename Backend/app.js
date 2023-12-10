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


// Get all Expenditures Routes
const getallexpenditureRoute = require("./Routes/getallexpenditureRoutes");
app.use("/", getallexpenditureRoute); 


// Get all Non-Tax Revenues Routes
const getallnontaxRevenue = require("./Routes/getallnontaxRoutes");
app.use("/", getallnontaxRevenue);

// Get all Schemes Routes
const getallScheme = require("./Routes/getallschemeRoutes");
app.use("/", getallScheme);


// Search Expenditure Routes
const getexpenditure = require("./Routes/getexpenditureRoutes");
app.use("/", getexpenditure);



// Search Non-Tax Revenue Routes
const getnontaxRevenue = require("./Routes/getnontaxRevenueRoutes");
app.use("/", getnontaxRevenue);



// Search Scheme Routes
const getScheme = require("./Routes/getschemeRoutes");
app.use("/", getScheme);



// Server Setup
const port = process.env.PORT || 5000;

app.listen(port, (req,res) => {
    console.log("Server Is Listening on Port " + port + "....");
})

