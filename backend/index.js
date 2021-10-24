const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usuarios = ["daiane", "abc"];

app.post("/login", function (req, res) {
  const { usuario, senha } = req.body;

  if (usuarios.includes(usuario)) {
    res.status(200).json({ mensagem: "Sucesso" });
  } else {
    res.status(400).json({ mensagem: "Erro" });
  }
});

app.post("/cadastro", function (req, res) {
  const { usuario, senha } = req.body;

  if (usuarios.includes(usuario)) {
    res.status(400).json({ mensagem: "Erro, usuario ja existe" });
  } else {
    usuarios.push(usuario);

    res.status(200).json({ mensagem: "Sucesso" });
  }
});

const porta = 3000;
app.listen(porta);
