const express = require("express");

const jwt = require("jsonwebtoken");
const session = require("express-session");

// Routes
const customer_routes = require("./router/auth_users.js").authenticated;
const genl_routes = require("./router/general.js").general;

// Functions
const is_valid = require("./router/auth_users.js").isValid;

// Data
const users = require("./router/auth_users.js").users;

const app = express();

app.use(express.json());

app.use(
  "/customer",
  session({
    secret: "fingerprint_customer",
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/customer/auth/*", function auth(req, res, next) {
  if (req.session.token) {
    jwt.verify(req.session.token, "fingerprint_customer", (err, user) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      req.user = user;
      next();
    });
  } else {
    return res.status(403).json({ message: "Forbidden" });
  }
});

// Register a user
app.post("/register", (req,res) => {
  let username = req.body.username;
  let password = req.body.password;

  if(!username || !password) {
    return res.status(400).json({message: "Invalid username or password"});
  }

  if(is_valid(username)) {
    return res.status(400).json({message: "Username already exists"});
  }

  users.push({username: username, password: password});

  return res.status(200).json({ message: "User successfully registered. Now you can login" });
});

const PORT = 5000;

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
