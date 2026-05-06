import express from "express";
import produtoRoutes from './routes/produtoRoutes';
import {pool} from './config/database';

const app = express()
app.use(express.json());
app.use('/api', produtoRoutes);

const PORT = process.env.PORT || 3000;
pool.getConnection()
    .then(()=>{
        console.log('Conectado ao Mysql.');
        app.listen(PORT,()=>{
            console.log('Servidor rodando em http://localhost:${PORT}')
        });
    })
    .catch((erro: any)=>{
        console.error('Erro ao conectar ao banco', erro)
    });