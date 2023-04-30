const EXPRESS = require("express");
const USER_MODEL = require("../src/models/user.model");

const app = EXPRESS();

app.use(EXPRESS.json());

// sem mais: if req.url ===, res.writehead

app.get("/home", (req, res) => {
  res.status(200).send("<h1>Hello, Express!</h1>");
});

app.get("/users", async (req, res) => {
  try {
    const USERS = await USER_MODEL.find({});
    res.status(201).json(USERS);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const ID = req.params.id;

    const USER = await USER_MODEL.findById(ID);

    return res.status(200).json(USER)
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const USER = await USER_MODEL.create(req.body);
    res.status(201).json(USER);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

const PORT = 8080;

app.listen(PORT, () =>
  console.log(
    `Rodando com Express na porta ${PORT}. Link: http://localhost/${PORT}`
  )
);
