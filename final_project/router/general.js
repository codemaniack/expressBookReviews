const express = require('express');
const axios = require('axios')
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const { username, password } = req.body
  const newUser = req.body


  // check to see if the req body user is empty
  if (Object.keys(newUser).length === 0)
  return res.status(400).send({ message: "Empty body" })

  // check to make sure fields aren't empty
  if (username == "" || password == "") return res.status(400).send({ message: "Fields were empty!"})

  // check to see if the user exists already
  const findUser = users.find(user => user.username == username)
  if (findUser) return res.status(400).send({ message : "User already exists" })
  
  
  // register user
  users.push(newUser)
  return res.status(200).send( { message: "User Registered Successfully", user: newUser})


  // return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/', async function (req, res) {

  return res.status(200).send(books)
    
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const { isbn } = req.params
  const foundBook = Object.entries(books).find(([key, value]) => key == isbn)
  if (foundBook) return res.status(200).send(foundBook)
  return res.status(404).json({message: "Book not found"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const { author } = req.params
  const foundBook = Object.entries(books).find(([key, value]) => value.author == author)
  if (foundBook) return res.status(200).send(foundBook)
  return res.status(404).json({message: "Book not found"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const { title } = req.params
  const foundBook = Object.entries(books).find(([key, value]) => value.title == title)
  if (foundBook) return res.send(foundBook)
  return res.status(404).json({message: "Book not found"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const { isbn } = req.params
  const foundBook = Object.entries(books).find(([key, value]) => key == isbn)
  
  if (foundBook) {
    const reviews = Object.values((foundBook[1].reviews))
    return res.status(200).send(reviews)
  }

  return res.status(404).send({ message: "Sorry, book not found" });
});

module.exports.general = public_users;
