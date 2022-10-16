var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const reviewHandler = require("./handler/reviews");

router.post("/", reviewHandler.create);
router.put("/:id", reviewHandler.update);
router.delete("/:id", reviewHandler.destroy);

module.exports = router;
