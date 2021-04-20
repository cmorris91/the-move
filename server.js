const express = require("express");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require("mongoose");
const routes = require("./routes");
//mongoDB authentication for logging in
const passport = require("passport")
const bodyParser = require("body-parser")
const LocalStrategy = require("passport-local")


const app = express();
const PORT = process.env.PORT || 3001;
//connecting database to mongostore
const store = new MongoDBStore({
  uri: 'mongodb://localhost:27017/connect_mongodb_session_test',
  collection: 'mySessions'
});
store.on('error', function(error) {
  console.log(error);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

// using session to store user's login data
app.use(require('express-session')({
  secret: 'this is as secret as it can get',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: false,
  saveUninitialized: false
}));
// Add routes, both API and view


app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/the-move");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
