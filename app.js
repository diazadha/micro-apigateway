require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var mediaRouter = require("./routes/media");
var coursesRouter = require("./routes/courses");
var orderPaymentsRouter = require("./routes/ordersPayments");
var refreshTokensRouter = require("./routes/refreshTokens");
var mentorsRouter = require("./routes/mentors");
var chaptersRouter = require("./routes/chapters");
var lessonsRouter = require("./routes/lessons");
var imageCoursesRouter = require("./routes/imageCourses");
var myCoursesRouter = require("./routes/myCourses");
var reviewsRouter = require("./routes/reviews");
var webhookRouter = require("./routes/webhook");
const verifyToken = require("./middlewares/verifyToken");
const can = require("./middlewares/permission");

var app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/media", verifyToken, can("admin", "student"), mediaRouter);
app.use("/courses", coursesRouter);
app.use("/orders", verifyToken, can("admin", "student"), orderPaymentsRouter);
app.use("/refresh-tokens", refreshTokensRouter);
app.use("/mentors", verifyToken, can("admin"), mentorsRouter);
app.use("/chapters", verifyToken, can("admin"), chaptersRouter);
app.use("/lessons", verifyToken, can("admin"), lessonsRouter);
app.use("/imagecourses", verifyToken, can("admin"), imageCoursesRouter);
app.use("/mycourses", verifyToken, can("admin", "student"), myCoursesRouter);
app.use("/reviews", verifyToken, can("admin", "student"), reviewsRouter);
app.use("/webhook", webhookRouter);

module.exports = app;
