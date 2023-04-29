const express = require("express");

const app = express();

// sem mais: if req.url ===, res.writehead

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Hello, Express!</h1>");
});

app.get("/users", (req, res) => {
  const USERS = [
    {
      name: "teste",
      email: "teste@gmail.com",
    },
    {
      name: "teste2",
      email: "teste2@gmail.com",
    },
  ];

  res.status(200).json(USERS);
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Rodando com Express na porta ${PORT}`));
