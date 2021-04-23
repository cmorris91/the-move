const router = require("express").Router();
// add controller folders

const users = require("../../controllers/userController")
router.route("/")
    .get(users.findAll)
    
router.route("/:id")
    .get(users.findById)

router.route("/login")
    .post(users.login)

router.route("/signup")
    .post(users.signup)

module.exports = router