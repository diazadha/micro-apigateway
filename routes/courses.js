var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const courseHandler = require("./handler/courses");
const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permission");

router.post("/", verifyToken, can("admin"), courseHandler.create);
router.get("/", courseHandler.getAll);
router.get("/:id", courseHandler.get);
router.put("/:id", verifyToken, can("admin"), courseHandler.update);
router.delete("/:id", verifyToken, can("admin"), courseHandler.destroy);

module.exports = router;
