$(document).ready(() => {
    const usuarioId = localStorage.getItem("usuario_id");
    const usuario = usuarios.find(u => u.id === usuarioId);

    if (usuario) {
        const generarHTMLViajes = (viajes) => {
            return viajes.map(viaje => {
                return `<div class="card">
                            <div class="card-content">
                                <p>Duración: ${viaje.duracion} minutos</p>
                                <p>Fecha: ${viaje.fecha}</p>
                                <p>Origen: ${viaje.origen}</p>
                                <p>Destino: ${viaje.destino}</p>
                                <p>Conductor: ${viaje.conductor}</p>
                            </div>
                        </div>`;
            }).join("");
        };

        const mostrarViajes = (viajes) => {
            const viajesHTML = generarHTMLViajes(viajes);
            $("#viajesContainer").html(viajesHTML);
        };

        let primerosViajes = usuario.viajes.slice(0, 4);
        mostrarViajes(primerosViajes);

        $("#verMas").click(() => {
            const todosLosViajes = usuario.viajes;
            mostrarViajes(todosLosViajes);
            $("#verMas").hide();
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario no encontrado.'
        });
    }

    $("#cerrarSesion, #cerrarSesionToggle").click(() => {
        localStorage.clear();
        window.location.href = "index.html";
    });
});
