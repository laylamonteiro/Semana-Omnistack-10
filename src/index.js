//localhost:3333 = '/'

// Métodos HTTPS: GET (buscar info), POST (criar info), PUT (editar info), DELETE (deletar info)

//Tipos de parâmetros:
//Query Params: request.query (Filtros, ordenação, paginação, ...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para a criação ou alteração de um registro)

//MongoDB (Banco de dados não-relacional)

const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://layla:fefeca00@cluster0-vo3xe.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json())
app.use(routes)


app.listen(3333);