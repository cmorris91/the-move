const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Bookmark
      .find(req.query)
      .populate("event","User")
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  //finds all using the User ID
  findAllById: function(req,res){
    db.Bookmark
    .find({user:req.body.name})
    .populate("events")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  //this one is just looking for the array, if the user has no bookmark array it will return false, otherwise return true
  findById: function(req, res) {
    db.Bookmark
      .find({user:req.body.name})
      .populate("Event", "User")
      .then(dbModel => 
        {if(dbModel[0]){
          res.json(true)
      }else if(!dbModel[0]){
        res.json(false)
      }
    })
      .catch(err => res.status(422).json(err));
  },
  //if there was no bookmark before it then tuns this function where it creates the bookmark
  create: function(req, res) {
    db.Bookmark
      .create({events:req.body.events, user:req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //since there is a bookmark already it pushes new event details into the event array
  update: function(req, res) {
    const info = req.body
    db.Bookmark
      .update({user:info.name},{$push:{events: info.events}}) 
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bookmark
      .update({user:req.params.uid},{$pull:{events: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
