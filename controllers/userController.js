const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
        .find(req.query)
        .populate("Event")
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate("Event")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      // req.session.save(() => {
      //   req.session._id = userData._id;
      //   req.session.logged_in = true;
      //   res.status(200).json(userData);
      // })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    // if (req.session.logged_in) {
    //   req.session.destroy(() => {
    //     res.status(204).end();
    //   });
    // } else {
    //   res.status(404).end();
    // }
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
