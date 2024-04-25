$(document).ready(() => {
    const conductorId = localStorage.getItem("usuario_id");
    const conductor = conductores.find(c => c.id === conductorId);

    if (conductor) {
        conductor.usuariosLlevados.forEach(usuarioId => {
                $("#usuariosLlevados").append(`<li>${usuarioId}</li>`);
        });

        $("#montoTotal").text(`$${conductor.montoTotalViajes.toFixed(2)}`);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Conductor no encontrado.'
        });
        window.location.href = "index.html";
    }

    $("#cerrarSesion, #cerrarSesionToggle").click(() => {
        localStorage.removeItem("usuario_id");
        window.location.href = "index.html";
    });
});
