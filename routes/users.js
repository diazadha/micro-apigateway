var express = require("express");
var router = express.Router();
const { APP_NAME } = process.env;
const userHandler = require("./handler/users");
const verifyToken = require("../middlewares/verifyToken");

//Register
router.post("/register", userHandler.register);

//Login
router.post("/login", userHandler.login);

//Update
router.put("/", verifyToken, userHandler.update);

//Get
router.get("/", verifyToken, userHandler.getUser);

//Logout
router.post("/logout", verifyToken, userHandler.logout);

module.exports = router;
