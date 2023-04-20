const fs = require("fs");
const path = require("path");

// Criar uma pasta, se der certo (não estiver duplicada) a pasta será criada!
fs.mkdir(path.join(__dirname, "/notes"), (error) =>
  error
    ? console.log(`Erro ${error}`)
    : console.log("Pasta criada com sucesso!")
);

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/notes", "hello.txt"),
  `Hello, World!`,
  (error) =>
    error
      ? console.log(`Erro: ${error}`)
      : console.log("Arquivo criado com sucesso!")
);

// Modificar um arquivo
fs.appendFile(
  path.join(__dirname, "/notes", "hello.txt"),
  ` Olá, Mundo!`,
  (error) =>
    error
      ? console.log(`Erro: ${error}`)
      : console.log("Arquivo modificiado com sucesso!")
);

// Ler arquivo
fs.readFile(
  path.join(__dirname, "/notes", "hello.txt"),
  "utf8",
  (error, data) => (error ? console.log(`Erro: ${error}`) : console.log(data))
);
