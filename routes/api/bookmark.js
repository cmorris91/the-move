const router = require("express").Router();

// controllers will need to be added 
const bookmarkController = require("../../controllers/bookmarkController")
router.route("/")
    .post(bookmarkController.findById)
    .put(bookmarkController.update)
    .post(bookmarkController.create)
    .delete(bookmarkController.remove);
module.exports = router;