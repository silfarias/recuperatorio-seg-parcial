const { where } = require('sequelize');
const Reserva = require('../models/Reserva')
const ctrlReservas = {};

// ==========================================
//         Controladores para las vitas
// ==========================================

ctrlReservas.listaReservas = (req, res) => {
    res.render('index')
}

ctrlReservas.nuevaReserva = (req, res) => {
    res.render('crear-reserva')
}

ctrlReservas.editarReserva = (req, res) => {
    const { id } = req.params;
    res.render('editar-reserva', { id })
}


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
ctrlReservas.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            } 
        });
        return res.json(reservas); 
    } catch (error) {
        console.log('Error al obtener las reservas', error);
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        })
    }
}

// Obtener una reserva
ctrlReservas.obtenerReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        return res.json(reserva);
    } catch (error) {
        console.log('Error al obtener la reserva', error);
        return res.status(500).json({
            message: 'Error al obtener la reserva'
        })
    }
    
}

// Crear una reserva
ctrlReservas.crearReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        dni,
        telefono,
        fecha_vuelo,
    } = req.body;

    try {
        const nuevaReserva = new Reserva({
            nombre,
            apellido,
            dni,
            telefono,
            fecha_vuelo, 
            codigo: new Date().getTime()
        }) 
        await nuevaReserva.save();
        return res.status(201).json({ message: 'Reserva creada con éxito' })
        
    } catch (error) {
        console.log('Error al crear la reserva', error);
        return res.status(500).json({
            message: 'Error al crear la reserva'
        })
    }
}

// Actualizar una reserva
ctrlReservas.actualizarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        await reserva.update(req.body)
        return res.json({
            message: 'Reserva actualizada exitosamente'
        });
    } catch (error) {
        console.log('Error al actualizar la reserva', error);
        return res.status(error.status || 500).json({
            message: error.message
        })
    }
}

// Eliminar una reserva de forma lógica
ctrlReservas.eliminarReserva = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await Reserva.findByPk(id);
        if (!reserva) {
            return res.status(404).json({ message: 'Reserva no encontrada' });
        }
        // Marcar la reserva como eliminada estableciendo el estado en false
        reserva.estado = false;
        await reserva.save();
        return res.json({ message: 'Reserva eliminada con éxito' });
    } catch (error) {
        console.log('Error al eliminar la reserva', error);
        return res.status(500).json({
            message: 'Error al eliminar la reserva'
        });
    }
}

module.exports = ctrlReservas;