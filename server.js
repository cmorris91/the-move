const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
//mongoDB authentication for logging in
const passport = require("passport")
const bodyParser = require("body-parser")
const LocalStrategy = require("passport-local")
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;
//connecting database to mongostore


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/the-move",
{
  useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
