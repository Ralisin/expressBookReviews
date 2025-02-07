const express = require("express");
let books = require("./booksdb.js");

const public_users = express.Router();

public_users.post("/register", (req, res) => {
  //Write your code here
  return res.status(300).json({ message: "Yet to be implemented" });
});

// Get the book list available in the shop
public_users.get("/", function (req, res) {
  let retrieveBookPromise = new Promise((resolve, reject) => {
    if (Object.keys(books).length === 0) {
      reject({ message: "No books available" });
    } else {
      resolve();
    }
  });

  retrieveBookPromise.then(() => {
    return res.status(200).send(books);
  });
});

// Get book details based on ISBN
public_users.get("/isbn/:isbn", function (req, res) {
  let isbn = req.params.isbn;

  if (books[isbn] !== undefined) {
    return res.status(200).json(books[isbn]);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

// Get book details based on author
public_users.get("/author/:author", function (req, res) {
  let author = req.params.author;

  let author_books = Object.values(books).filter(
    (book) => book.author === author
  );

  console.log(author_books);

  if (author_books.length > 0) {
    return res.status(200).json(author_books);
  } else {
    return res.status(404).json({ message: "Author not found" });
  }
});

// Get all books based on title
public_users.get("/title/:title", function (req, res) {
  let title = req.params.title;

  let title_books = Object.values(books).filter((book) => book.title === title);

  if (title_books.length > 0) {
    return res.status(200).json(title_books);
  } else {
    return res.status(404).json({ message: "Title not found" });
  }
});

//  Get book review
public_users.get("/review/:isbn", function (req, res) {
  let isbn = req.params.isbn;

  if (books[isbn] !== undefined) {
    return res.status(200).json(books[isbn].reviews);
  } else {
    return res.status(404).json({ message: "Book not found" });
  }
});

module.exports.general = public_users;
