import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

//CARREGAR AS VARIÁVEIS DE AMBIENTE
dotenv.config();


const pool = mysql.createPool({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
    port: Number(process.env.DB_PORT),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
export {pool}