const express = require("express");
const exphb = require("express-handlebars");

const app = express();
const conn = require("./db/conn");

app.engine("handlebars", exphb());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.listen(3000);
