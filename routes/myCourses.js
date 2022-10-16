var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const myCourseHandler = require("./handler/my-courses");

router.post("/", myCourseHandler.create);
router.get("/", myCourseHandler.getAll);

module.exports = router;
