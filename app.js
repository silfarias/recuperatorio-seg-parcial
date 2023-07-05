// Imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const { connectDB } = require('./database');
connectDB();

// Middlewares
// TODO: Implementar middlewares
// app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
    return res.status(404).render('404');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`)
});
