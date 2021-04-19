const router = require("express").Router();
// add controller folders

const eventController = require("../../controllers/eventController")
router.route("/")
    .get(eventController.findAll)
    .post(eventController.create)

router.route("/name/:name/city/:city")
    .get(eventController.findByNameCity)

router.route("/:id")
    .get(eventController.findById)
    .put(eventController.update)
    .delete(eventController.remove);

module.exports = router; 