const router = require("express").Router();
const eventController = require("../../controllers/eventController")

router.route("/")
    .get(eventController.findAll)
    .post(eventController.create)

router.route("/name/:name/city/:city")
    .get(eventController.find)

router.route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove);

module.exports = router; 