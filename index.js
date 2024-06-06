// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

app.use(express.json()); // Middleware para analisar JSON
app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados de formulário

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
