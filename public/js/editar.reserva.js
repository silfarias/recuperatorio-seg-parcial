const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const dni = document.querySelector('#dni')
const telefono = document.querySelector('#telefono')
const destino = document.querySelector('#destino')
const costo = document.querySelector('#costo')
const fecha_solicitud = document.querySelector('#fecha_solicitud')
const fecha_vuelo = document.querySelector('#fecha_vuelo')

document.addEventListener('DOMContentLoaded', async () => {

    // Traemos la reserva que se va a editar
    const response = await fetch(`/api/${reservaId}`);
    const data = await response.json();

    // Mostrar en el formulario los datos de la reserva que se quiere actualizar
    nombre.value = data.nombre;
    apellido.value = data.apellido;
    dni.value = data.dni;
    telefono.value = data.telefono;
    destino.value = data.destino;
    costo.value = data.destino;
    fecha_solicitud.value = dayjs(data.fecha_ingreso).format('YYYY-MM-DD HH:mm');
    fecha_vuelo.value = dayjs(data.fecha_salida).format('YYYY-MM-DD HH:mm');

});

formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    reservaActualizada = {
        nombre: nombre.value,
        apellido: apellido.value,
        dni: dni.value,
        telefono: telefono.value,
        destino: destino.value,
        costo: costo.value,
        fecha_solicitud: fecha_solicitud.value,
        fecha_vuelo: fecha_vuelo.value,
    }

    // Se envían los nuevos datos al servidor express
    const response = await fetch(`/api/${reservaId}`, {
        method: 'PUT',
        body: JSON.stringify(reservaActualizada),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/"

});
