const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const quizRoute = require("./routes/quiz");
const jobsheetRoute = require("./routes/jobsheet");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/quizzes", quizRoute);
app.use("/api/jobsheet", jobsheetRoute);

app.listen(port, () =>
  console.log(`App Listening on port http://localhost:${port}`)
);
