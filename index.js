if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const ejsMate = require("ejs-mate");
const path = require("path");
const app = express();
const port = process.env.ALTFUN_PORT;

app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  let statusGood = process.env.STATUS_GOOD;
  console.log(statusGood);

  res.render("hello", { statusGood });
});

app.get("/bye", (req, res) => {
  let statusBad = process.env.STATUS_BAD;

  res.render("goodbye/world", { statusBad });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
