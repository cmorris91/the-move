const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Event
      .find(req.query)
      .populate("User")
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Event
      .findById(req.params.id)
      .populate("User")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  find: function(req, res) {
    db.Event
    .find ({name: req.params.name, city: req.params.city})
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
    console.log(req.body)
    db.Event
      .findOneAndUpdate({ _id: req.params.id }, {$push: {rating:req.body.rating, feedback: req.body.feedback}})
      .then(dbModel => res.json(dbModel))
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
