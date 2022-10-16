var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const imageCourseHandler = require("./handler/image-courses");

router.post("/", imageCourseHandler.create);
router.delete("/:id", imageCourseHandler.destroy);

module.exports = router;
