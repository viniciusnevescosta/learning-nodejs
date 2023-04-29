const moongose = require("mongoose");

const DB_CONNECTION = async () => {
  try {
    await moongose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonode.6cg65l9.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Conexão com a DB realizada com sucesso!");
  } catch (error) {
    console.log(`A conexão com a DB falhou: ${error}`);
  }
};

module.exports = DB_CONNECTION;
