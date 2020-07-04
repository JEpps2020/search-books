const router = require("express").Router();
const bookRoutes = require("./books");
//localhost:8080/api
// Book routes
router.use("/books", bookRoutes);

module.exports = router;
