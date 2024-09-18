import express from 'express';
import connectDb from './db.js';
import cors from 'cors';

const app = express();
app.use(cors());
const conexao = await connectDb()

conexao.on('error', (erro) => {
    console.error('Erro ao conectar', erro)
})

conexao.once('open', () => {
    console.log('Conectado ao MongoDB')
})

app.listen(3000, () => {
    console.log('Servidor Rodando')
})