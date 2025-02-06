const express = require("express");
const jwt = require("jsonwebtoken");
let books = require("./booksdb.js");

const regd_users = express.Router();

const TOKEN_HEADER_KEY = "gfg_token_header_key";

let users = [];

// Check if username is valid
const isValid = (username) => {
  //returns boolean
  Object.values(users).forEach((user) => {
    if (user.username === username) {
      return true;
    }
  });

  return false;
};

const authenticatedUser = (username, password) => {
  return Object.values(users).some(
    (user) => user.username === username && user.password === password
  );
};

// Only registered users can login
regd_users.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if ((!username || !password) || !authenticatedUser(username, password)) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  let token = jwt.sign({ username: username }, TOKEN_HEADER_KEY, {
    expiresIn: 60 * 60,
  });
  req.session.authorization = {
    token, username
  };

  return res.status(200).json({ message: "Login successful" });
});

// Register a user
regd_users.post("/register", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  if (isValid(username)) {
    return res.status(400).json({ message: "Username already exists" });
  }

  users.push({ username: username, password: password });

  return res
    .status(200)
    .json({ message: "User successfully registered. Now you can login" });
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  let username = req.user.username;
  
  let isbn = req.params.isbn;
  let review = req.body.review;

  if (!isbn || !review) {
    return res.status(400).json({ message: "Invalid ISBN or review" });
  }

  if (books[isbn] === undefined) {
    return res.status(404).json({ message: "Book not found" });
  }

  books[isbn].reviews[username] = review.description;

  return res.status(200).json({ message: "Review added successfully" });
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
module.exports.TOKEN_HEADER_KEY = TOKEN_HEADER_KEY;