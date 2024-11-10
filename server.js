const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Conectar ao MongoDB (substitua a string pela sua conexão)
mongoose.connect('mongodb://localhost:27017/meuBanco', { useNewUrlParser: true, useUnifiedTopology: true });

// Definir um schema e modelo de usuário
const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota para cadastro
app.post('/cadastro', async (req, res) => {
    const novoUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });
    await novoUsuario.save();
    res.send('Usuário cadastrado com sucesso!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});