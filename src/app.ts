import express from 'express';

// Inicializando o express
const app = express();

// Configurando body parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Servindo app em uma porta
const port = 8000;
app.listen(port, () => {
    console.log(`The app is up and running on port ${port}! 🔥`);
});