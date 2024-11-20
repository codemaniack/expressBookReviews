const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [{
  "username" : "brandon",
  "password" : "securepass123"
}];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  const { username, password } = req.body
  const findUser = users.find((user) => user.username == username && user.password == password)
  if (findUser) {
    req.session.user = findUser
    req.session.isAuthenticated = true
    console.log(req.session)
    return res.status(200).send({ message: "Login successful" } )
  }

  return res.status(400).json({message: "Incorrect username / password"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params; // Extract ISBN from the route parameter
  const { reviewer, rating, comment } = req.body; // Extract review details from the request body

  // Find the book by ISBN
  const findBook = Object.entries(books).find(([key, obj]) => key == isbn);

  if (!findBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Access the book object
  const book = findBook[1];

  // Add the new review
  const reviewId = Object.keys(book.reviews).length + 1; // Generate a unique ID for the review
  book.reviews[reviewId] = {
    reviewer,
    rating,
    comment,
  };

  // Confirm the review was added
  console.log(`Updated reviews for book ${isbn}:`, book.reviews);

  return res.status(200).json({ message: "Review added successfully", reviews: book.reviews });
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  const { isbn } = req.params; // Extract ISBN from the route parameter

  // Find the book by ISBN
  const findBook = Object.entries(books).find(([key, obj]) => key == isbn);

  if (!findBook) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Access the book object
  const book = findBook[1];

  // Check if reviews exist
  if (Object.keys(book.reviews).length === 0) {
    return res.status(200).json({ message: "No reviews to delete" });
  }

  // Delete all reviews by reinitializing the `reviews` object
  book.reviews = {};

  // Respond with the updated reviews
  return res.status(200).json({ message: "Review deleted successfully", reviews: book.reviews });
})

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
