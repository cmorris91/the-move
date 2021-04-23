const router = require("express").Router();

// controllers will need to be added 
const bookmarkController = require("../../controllers/bookmarkController")
router.route("/")
    .put(bookmarkController.update)
    .post(bookmarkController.create)
    .delete(bookmarkController.remove);
router.route("/user")
.post(bookmarkController.findById)
router.route("/all")
.get(bookmarkController.findAll)
router.route("/all/user")
.post(bookmarkController.findAllById)
router.route("/:id/:uid")
    .delete(bookmarkController.remove);
module.exports = router;