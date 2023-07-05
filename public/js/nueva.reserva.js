const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const dni = document.querySelector('#dni').value;
    const telefono = document.querySelector('#telefono').value;
    const destino = document.querySelector('#destino').value;
    const costo = document.querySelector('#costo').value;
    const fecha_solicitud = document.querySelector('#fecha_solicitud').value;
    const fecha_vuelo = document.querySelector('#fecha_vuelo').value;

    const reserva = {
        nombre,
        apellido,
        dni,
        telefono,
        destino,
        costo,
        fecha_solicitud,
        fecha_vuelo,
    }

    const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        body: JSON.stringify(reserva),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    })
    
    const data = await response.json();

    alert(data.message)
    window.location.href = "/"

});
