const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node Js",
    category: "Javascript",
    body: "Este artigo vai te ajudar a aprender Node.Js...",
    comments: 105,
  };

  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "Dayan",
    surname: "Monteiro",
  };

  const word = "Teste";

  const auth = true;

  const approved = true;

  res.render("home", { user: user, word, auth, approved });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
});
