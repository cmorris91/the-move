const router = require("express").Router();
// add controller folders

router.route("/")
    .get(eventController.findAll)
    .post(eventController.create)

router.route("/:id")
    .get(eventController.findId)
    .put(eventController.update)
    .delete(eventController.remove);

module.exports = router; 