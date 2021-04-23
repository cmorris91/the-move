const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .populate("User")
      .sort({ date: -1 })
      .then(dbModel => {
        res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event
      .findById(req.params.id)
      .populate("User")
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)});
  },

  find: function(req, res) {
    db.Event
    .find ({name: {$regex: req.params.name, $options: "i"}, 
    city: {$regex: req.params.city, $options: "i"}})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    const event = new db.Event(req.body);
    event.getRating();
    console.log(event)

    db.Event
      .create(event)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, 
        {$push: {rating:req.body.rating, 
        feedback: req.body.feedback, 
        images: req.body.images}})
      .then(dbModel => {
        db.Event
        .findById({ _id: req.params.id }).then(dbModel=>{
          let sum = 0
          for(var i = 0; i< dbModel.rating.length; i++) {
            sum += dbModel.rating[i]
          }
          let avg = sum / dbModel.rating.length
          console.log(avg)
          db.Event
            .findOneAndUpdate({ _id: req.params.id }, 
            {$set: {averageRating:avg}}).then(dbModel2 => {
              res.json(dbModel2)})
            })
        })
      .catch(err => {
        console.log(err)
        res.status(422).json(err)});
  },
  remove: function(req, res) {
    db.Event
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
