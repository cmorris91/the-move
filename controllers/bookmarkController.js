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
  findAllById: function(req,res){
    db.Bookmark
    .find({user:req.body.name})
    .populate("Event", "User")
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
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
  create: function(req, res) {
    db.Bookmark
      .create({events:req.body.events, user:req.body.name})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    const info = req.body
    db.Bookmark
      .update({user:info.name},{$push:{events: info.events}}) 
      .then(dbModel => console.log(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bookmark
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
