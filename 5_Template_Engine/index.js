const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials/"],
});

app.engine("handlebars", hbs.engine);
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

app.get("/blog", function (req, res) {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Node.js",
      body: "Node.js é muito utilizado na programação hoje em dia",
      comments: 4,
    },
    {
      title: "PHP ainda vale a pena?",
      category: "PHP",
      body: "",
      comments: 12,
    },
    {
      title: "Os segredos de JavaScript",
      category: "JavaScript",
      body: "",
      comments: 5,
    },
  ];

  res.render("blog", { posts });
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
