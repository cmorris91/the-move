const db = require("../models");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

module.exports = {
  findAll: function(req, res) {
    db.User
        .find(req.query)
        .populate("Event")
        .sort({ date: -1 })
        .then(dbModel => {
          console.log(req.session)
          res.json({dbModel, session: req.session})})
        .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("Event")
      .then(dbModel => {
        console.log(req.session)
        res.json({dbModel, session: req.session})})
      .catch(err => res.status(422).json(err));
  },
  signup: function(req, res) {
    const users = new db.User(req.body);
    db.User
      .create(users)
      .then(dbModel => {
 
        req.session.save(() => {
          req.session._id = dbModel._id;
          req.session.user_id =dbModel.name
          res.status(200).json({dbModel});
      })
    })
      .catch(err => res.status(422).json(err));
  },

 login: function(req, res) {
    db.User
 
      .find({email:req.body.email})
      
      .then(dbModel => {
        console.log(dbModel[0].password)
        if(req.body.password == dbModel[0].password){
          req.session._id = dbModel._id;
          req.session.user_id =dbModel.name
          req.session.logged_in = true;
          res.status(200).json({dbModel});
        }else{
        res.status(404).json({message:"password or email are incorrect"})  
        }
        })
      .catch(err => res.status(422).json(err));
  },
  logout: function(req, res) {
    if (req.session.logged_in) {
      localStorage.clear(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
      
  }
};

