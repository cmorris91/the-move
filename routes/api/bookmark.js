const router = require("express").Router();
// controllers will need to be added 

routes.route("/")
    .get(bookmarkController.findAll)
    .put(bookmarkController.update);


module.exports = router;