const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const fs = require('fs');

const port = 3001; 

app.use(bodyParse.urlencoded({extended: true})); // Converte a recsição em um objeto.
app.use(bodyParse.json())

app.get('/', (request, response, next) => {
  console.log(request);
  fs.writeFileSync(__dirname + "/Recsicao do google chome.http", JSON.stringify(request), (err) => {
    console.log(err || 'Request salva com sucesso!');
  })
  response.send('<h1>Sucsses!</h1>').status(200);
})

app.listen(port,() => {
  console.log(`Servidor startado na porta ${port}...`);
})