const router = require("express").Router();
// add controller folders

const users = require("../../controllers/userController")
router.route("/")
    .get(users.findAll)
    .post(users.create)
router.route("/:id")
    .get(users.findById)
    
router.route("/logout/:id")
    .logout(users.logout)

module.exports = router