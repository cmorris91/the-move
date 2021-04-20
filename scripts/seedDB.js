const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/the-move"
);
const userSeed = [
  {
    name:"jen",
    email:"jen@jen.com",
    password:"abc123",
    date: new Date(Date.now())
  },
  {
    name:"ben",
    email:"ben@ten.com",
    password:"abcd12",
    date: new Date(Date.now())
  },
  {
    name:"ken",
    email:"ken@ken.com",
    password:"abcde1",
    date: new Date(Date.now())
  },
  {
    name:"pen",
    email:"pen@pen.com",
    password:"abcdef",
    date: new Date(Date.now())
  }
]


//change reactreadinglist later
db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! a");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
 