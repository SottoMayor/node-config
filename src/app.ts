import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

// Inicializando o express
const app = express();

// Configurando body parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Servindo app em uma porta
const port = process.env.NODE_PORT ?? 3000;
app.listen(port, () => {
    console.log(`The app is up and running on port ${port}! 🔥`);
});
