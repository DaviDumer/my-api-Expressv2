const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');
const userDataBase = require('./database/usersDataBase');

const port = 3001; 

app.use((req, res, next) => { // Faz a liperação do cors, de endereços diferentes.
  res.header("Access-Control-Allow-Origin", ["http://localhost:3000"])
  res.header("Access-Control-Allow-Methods", ['GET','PUT','POST','DELETE'])
  app.use(cors())
  next()
})

app.use(express.urlencoded({extended: true})); // Converte a recsição em um objeto.
app.use(express.json());

app.get('/', (request, response, next) => {
  response.send(fs.readFileSync(__dirname + '/view/index.html', 'utf-8' )).status(200);
});

app.get('/users', (request, response, next) => {
  const users = userDataBase.getUsers();
  response.send(JSON.stringify(users)).status(200);
});

app.get('/user/:id', (request, response, next) => {
  const user = userDataBase.getUser(request.params.id);
  response.send(JSON.stringify(user)).status(200);
});

app.post('/user', (request, response, next) => {
  const user = request.body;
  console.log(user)
  userDataBase.setUser(user);
  response.send("Success!").status(200);
})

app.put('/user', (request, response, next) => {
  const user = userDataBase.putUser(request.body);
  response.send("Success!").status(200);
});

app.delete('/user', (request, response, next) => {
  const user = userDataBase.deleteUser(request.body.id);
  response.send(user).status(200);
})

app.listen(port,() => {
  console.log(`Servidor startado na porta ${port}...`);
});