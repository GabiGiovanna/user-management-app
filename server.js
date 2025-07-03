import express from "express";

const app = express(); //Passando o express como função
app.get("/usuarios", (req, res) => {
  res.send("Deu bom dms");
}); // Rota de GET para /usuarios (Requisição e resposta)

app.listen(3000); // Inicia o servidor na porta 3000
