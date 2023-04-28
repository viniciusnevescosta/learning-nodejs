const path = require("path");

// nome do arquivo atual
console.log(path.basename(__filename));

// nome do diretório atual
console.log(path.dirname(__filename));

// extensão do arquivo
console.log(path.extname(__filename));

// criar objeto path
console.log(path.parse(__filename));

// adicionar caminhos a uma url de diretório
console.log(path.join(__dirname, "pasta_adicional", "arquivo.html"));
