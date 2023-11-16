const express = require("express");

const app = express();
const port = 3000;

// middleware
// const checkAuth = function (req, res, next) {
//   req.authStatus = false;

//   if (req.authStatus) {
//     console.log("Está, logado, pode continuar");
//     next();
//   } else {
//     console.log("Não está logado, faça o login para continuar");
//     next();
//   }
// };

// app.use(checkAuth);

const path = require("path");
const basePath = path.join(__dirname, "templates");

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(`Estamos buscando pelo usuário: ${id}`);
  res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
