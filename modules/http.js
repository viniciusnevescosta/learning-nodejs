const http = require("http");

// criar servidor e entregar baseado em uma 'request' a 'response'
const server = http.createServer((req, res) => {
  // A response precisa ser uma string

  if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Olá, Mundo!</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "pedro",
        email: "pedro@gmail.com",
      },
      {
        name: "patricia",
        email: "patricia@gmail.com",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

const port = 8080;

server.listen(port, () => console.log(`Rodando na porta ${port}`));
