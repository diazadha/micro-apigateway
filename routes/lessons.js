var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const lessonHandler = require("./handler/lessons");

router.post("/", lessonHandler.create);
router.get("/", lessonHandler.getAll);
router.get("/:id", lessonHandler.get);
router.put("/:id", lessonHandler.update);
router.delete("/:id", lessonHandler.destroy);

module.exports = router;
