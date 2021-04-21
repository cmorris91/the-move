const router = require("express").Router();

const bookmarkRoutes = require("./bookmark");
const userRoutes = require("./users");
const eventRoutes = require("./event");

//routes
router.use("/bookmark", bookmarkRoutes);
router.use("/user", userRoutes);
router.use("/event", eventRoutes);


module.exports = router;