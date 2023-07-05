// TODO: Crear modelo de datos de Reserva
const { sequelize, DataTypes } = require('../database');
const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    codigo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        defaultValue: new Date().getTime()
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_vuelo: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'reservas'
});

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Reserva.sync({ force: false }).then(() => {
    console.log('Tabla de Reservas creada');
});

module.exports = Reserva;