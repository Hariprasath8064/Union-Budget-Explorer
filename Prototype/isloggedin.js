const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const pool = require('./DB');
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const { isLoggedin } = require('../Backend/Middleware/loginMiddleware');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("views", "./views");
app.set("view engine", "ejs");

// Session setup
app.use(session({
    secret: "MySecret",
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore(), // SQLite store for session data
}));

app.use(isLoggedin);

// Login route
app.get('/login', (req, res) => {
    res.render("Login");
});

// Handle login
app.post("/login", async (req, res) => {
    const { uname, pwd } = req.body;

    try {
        const user = await pool.query("SELECT * FROM users WHERE username = $1 AND pwd = $2;", [uname, pwd]);

        if (user.rowCount > 0) {
            req.session.user = {
                id: user.rows[0].id,
                username: user.rows[0].username
            };
            res.redirect("/");
        } else {
            res.status(400).json("Invalid Credentials");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("Internal Server Error");
    }
});

// Home route
app.get("/", (req, res) => {
    res.render("home", { isLoggedin: req.locals.isLoggedin });
});

