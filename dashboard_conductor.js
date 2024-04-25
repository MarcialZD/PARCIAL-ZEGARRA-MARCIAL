$(document).ready(function () {
    const conductorId = localStorage.getItem("usuario_id");
    const conductor = conductores.find(c => c.id === conductorId);

    if (conductor) {
        const mostrarUsuariosAbordaron = () => {
            const usuariosAbordaronHTML = conductor.usuariosLlevados.map(usuarioId => {
                const usuario = usuarios.find(u => u.id === usuarioId);
                return `<li class="collection-item">${usuario.usuario}</li>`;
            }).join("");
            $("#usuariosAbordaron").html(usuariosAbordaronHTML);
        };

        const calcularMontoTotal = () => {
            const montoTotal = conductor.montoTotalViajes.toFixed(2);
            $("#montoTotal").text(`$${montoTotal}`);
        };

        mostrarUsuariosAbordaron();
        calcularMontoTotal();
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
