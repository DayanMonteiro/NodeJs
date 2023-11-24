const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const app = express();

const User = require("./models/User");
const Address = require("./models/Address");

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.get("/users/create", (req, res) => {
  res.render("adduser");
});

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  console.log("usuário", req.body);

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;

  const user = await User.findOne({
    raw: true,
    where: {
      id: id,
    },
  });
  res.render("userview", { user: user });
});

app.post("/users/delete/:id", async (req, res) => {
  const id = req.params.id;

  await User.destroy({
    where: {
      id: id,
    },
  });
  res.redirect("/");
});

app.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findOne({
      include: Address,
      where: {
        id: id,
      },
    });
    res.render("useredit", { user: user.get({ plain: true }) });
  } catch (error) {
    console.log(error);
  }
});

app.post("/users/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  } else {
    newsletter = false;
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  };

  // console.log(req.body);
  // console.log(userData);

  User.update(userData, {
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

app.post("/address/create", async (req, res) => {
  const UserId = req.body.UserId;
  const street = req.body.street;
  const number = req.body.number;
  const city = req.body.city;

  const address = {
    street,
    number,
    city,
    UserId,
  };

  await Address.create(address)
    .then(res.redirect(`/users/edit/${UserId}`))
    .catch((err) => console.log(err));
});

app.post("/address/delete/", async (req, res) => {
  const id = req.body.id;

  // destroy é o método de exclusão
  await Address.destroy({
    where: {
      id: id,
    },
  })
    .then(res.redirect("/"))
    .catch((err) => console.log(err));
});

app.get("/", async (req, res) => {
  const users = await User.findAll({ raw: true });

  // console.log("users home", users);

  res.render("home", { users: users });
});

conn
  // apaga os dados da tabela
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
