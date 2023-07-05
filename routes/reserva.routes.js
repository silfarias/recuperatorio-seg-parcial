// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const { listaReservas,
    nuevaReserva, 
    editarReserva, 
    obtenerReservas,
    crearReserva,
    actualizarReserva,
    eliminarReserva,
    obtenerReserva} = require('../controllers/reserva.controllers');


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', listaReservas)

// Formulario para crear una reserva
router.get('/nueva-reserva', nuevaReserva)

// Formulario para actualizar una reserva
router.get('/editar-reserva/:id', editarReserva)

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api', obtenerReservas);

// Obtener una reserva
router.get('/api/:id', obtenerReserva);
 
// Crear una reserva
router.post('/api', crearReserva);
 
// Actualizar una reserva
router.put('/api/:id', actualizarReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/:id', eliminarReserva);

module.exports = router;