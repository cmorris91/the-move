const router = require("express").Router();
// add controller folders

router.route("/:id")
    .post(userController.create)
    .get(userController.findId)
    .delete(userController.remove);

module.exports = router