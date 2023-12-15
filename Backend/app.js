// Dependencies:
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

//const pool = require("../Union-Budget-Explorer/Postgres DB/DB"); // SetUp Postgres Database 


//Middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/Public/"));
app.use(cors());


// Get all Expenditures Routes
const getallexpenditureRoute = require("./Routes/Table Data Routes/getallexpenditureRoutes");
app.use("/", getallexpenditureRoute); 


// Get all Non-Tax Revenues Routes
const getallnontaxRevenue = require("./Routes/Table Data Routes/getallnontaxRoutes");
app.use("/", getallnontaxRevenue);

// Get all Schemes Routes
const getallScheme = require("./Routes/Table Data Routes/getallschemeRoutes");
app.use("/", getallScheme);


// Search Expenditure Routes
const getexpenditure = require("./Routes/Search Routes/getexpenditureRoutes");
app.use("/", getexpenditure);



// Search Non-Tax Revenue Routes
const getnontaxRevenue = require("./Routes/Search Routes/getnontaxRevenueRoutes");
app.use("/", getnontaxRevenue);



// Search Scheme Routes
const getScheme = require("./Routes/Search Routes/getschemeRoutes");
app.use("/", getScheme);


const getobjective = require("./Routes/getschemeinfoRoute");
app.use("/", getobjective);



// Delete Revenue Route
const deleteRevenue = require("./Routes/Deletion Routes/deleteRevenueRoutes");
app.use("/", deleteRevenue);


// Delete Expense Route
const deleteExpense = require("./Routes/Deletion Routes/deleteExpenseRoutes");
app.use("/", deleteExpense);


// Delete Scheme Route
const deleteScheme = require("./Routes/Deletion Routes/deleteschemeRoutes");
app.use("/", deleteScheme);


const updateRevenue = require("./Routes/Updation Routes/UpdateRevenueRoute");
app.use("/", updateRevenue);


const updateExpense = require("./Routes/Updation Routes/UpdateExpenseRoute");
app.use("/", updateExpense);


const updateScheme = require("./Routes/Updation Routes/UpdateSchemeRoute");
app.use("/", updateScheme);


const InsertRevenue = require("./Routes/Insertion Routes/InsertRevenueRoute");
app.use("/", InsertRevenue);


const InsertExpense = require("./Routes/Insertion Routes/InsertExpenseRoute");
app.use("/", InsertExpense);


const InsertScheme = require("./Routes/Insertion Routes/InsertSchemeRoute");
app.use("/", InsertScheme);

// Server Setup
const port = process.env.PORT || 5000;

app.listen(port, (req,res) => {
    console.log("Server Is Listening on Port " + port + "....");
})

