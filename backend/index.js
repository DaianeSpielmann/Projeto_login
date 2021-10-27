const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = [];

app.post("/login", function (req, res) {
  const { email } = req.body;

  console.log(usuarios);

  if (usuarios.includes(email)) {
    res.status(200).json({ mensagem: "Sucesso" });
  } else {
    res.status(400).json({ mensagem: "Erro" });
  }
});

app.post("/cadastro", function (req, res) {
  const { email } = req.body;

  if (usuarios.includes(email)) {
    res.status(400).json({ mensagem: "Erro, usuario ja existe" });
  } else {
    usuarios.push(email);

    res.status(200).json({ mensagem: "Sucesso" });
  }
});

const porta = 3000;
app.listen(porta);
