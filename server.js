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
  collection: 'sessions'
});
store.on('error', function(error) {
  console.log(error);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

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
mongoose.connect("mongodb+srv://cmorris91:08Grade11@cluster0.vbiho.mongodb.net/theMove?retryWrites=true&w=majority" || "mongodb://localhost/the-move",
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
