const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/the-move"
  );

  const bookmarkSeed =[
      {
      events:"6078aa920482bf2044645aac",
      user:"6078a8504485de51284b29e8"
  },
  {
    events:"6078aa920482bf2044645aab",
    user:"6078a8504485de51284b29e9"
},   {
    events:"6078aa920482bf2044645aad",
    user:"6078a8504485de51284b29ea"
},   {
    events:"6078aa920482bf2044645aaa",
    user:"6078a8504485de51284b29eb"
},

]

db.Bookmark
  .remove({})
  .then(() => db.Bookmark.collection.insertMany(bookmarkSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! a");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });