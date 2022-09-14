const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//Configuracion
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views')); 

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

//Estilos
app.use(express.static(path.join(__dirname, '../app/assets')));

module.exports = app;