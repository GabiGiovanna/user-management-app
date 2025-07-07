import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express(); //Passando o express como função

app.use(express.json()); // Middleware para analisar o corpo das requisições como JSON

app.use(cors());

// Rota de POST(Cadastro) para /usuarios (Requisição e resposta)
app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
      image: req.body.image,
    },
  });

  res.status(201).json(req.body); // Retorna o usuário cadastrado com status 201 (Criado)
});

// Rota de GET(Listagem) para /usuarios (Requisição e resposta)
app.get("/usuarios", async (req, res) => {
  let users = [];
  if (req.query) {
    // Se houver parâmetros de consulta, filtra os usuários com base nesses parâmetros
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

// Rota de PUT(Editar) para /usuarios (Requisição e resposta)
app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id, // Obtém o ID do usuário a ser atualizado a partir dos parâmetros da rota
    },
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
      image: req.body.image,
    },
  });

  res.status(201).json(req.body); // Retorna o usuário cadastrado com status 201 (Criado)
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id, // Obtém o ID do usuário a ser excluído a partir dos parâmetros da rota
    },
  });
  res.status(204).json({ message: "User Deletado com sucesso" }); // Retorna status 204 (e envia essa mensagem) após a exclusão
});

app.listen(3333); // Inicia o servidor na porta 3333

//User : gabriela - PX6QrRzF1pYWYSCZ
