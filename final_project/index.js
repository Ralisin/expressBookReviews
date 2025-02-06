const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const session = require("express-session");

// Routes
const customer_routes = require("./router/auth_users.js").authenticated;
const genl_routes = require("./router/general.js").general;

const TOKEN_HEADER_KEY = require("./router/auth_users.js").TOKEN_HEADER_KEY;

// Import from env file
const JWT_SECRET_KEY = "fingerprint_customer";

const PORT = 5000;

app.use(express.json());

app.use(
  "/customer",
  session({
    secret: JWT_SECRET_KEY,
    resave: true,
    saveUninitialized: true,
  })
);

app.use("/customer/auth/*", function auth(req, res, next) {
  let token = req.session.authorization['token'];

  if (!token) return res.status(403).json({ message: "Forbidden" });

  jwt.verify(token, TOKEN_HEADER_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "User not logged in" });

    req.user = user;
    next();
  });
});

app.use("/customer", customer_routes);
app.use("/", genl_routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
