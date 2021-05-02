const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.User
        .find(req.query)
        .populate("Event")
        .sort({ date: -1 })
        .then(dbModel => {
      
          res.json({dbModel})})
        .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("Event")
      .then(dbModel => {

        res.json({dbModel})})
      .catch(err => res.status(422).json(err));
  },
  //lets you sign up
  signup: function(req, res) {
    const users = new db.User(req.body);
    db.User
      .create(users)
      .then(dbModel => {
          res.status(200).json({dbModel});

      })

      .catch(err => res.status(422).json(err));
  },
//grabs data and references model before it lets you in
 login: function(req, res) {
    db.User
 
      .find({email:req.body.email})
      .then(dbModel => {
        console.log(dbModel[0].password)
        if(req.body.password == dbModel[0].password){
          res.status(200).json({dbModel});
        }else{
        res.status(404).json({message:"password or email are incorrect"})  
        }
        })
      .catch(err => res.status(422).json(err));
  },

};

