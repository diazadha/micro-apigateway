var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const chapterHandler = require("./handler/chapters");

router.post("/", chapterHandler.create);
router.get("/", chapterHandler.getAll);
router.get("/:id", chapterHandler.get);
router.put("/:id", chapterHandler.update);
router.delete("/:id", chapterHandler.destroy);

module.exports = router;
