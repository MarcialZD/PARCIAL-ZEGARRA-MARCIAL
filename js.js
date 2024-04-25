const usuarios = [
    { id: "user1", usuario: "usuario1", contraseña: "contraseña1", tipo: "usuario",
    viajes: [
        { duracion: 45, fecha: "2024-04-24T08:00:00", origen: "Casa", destino: "Trabajo", conductor: "Conductor 1" },
        { duracion: 30, fecha: "2024-04-24T12:00:00", origen: "Trabajo", destino: "Casa", conductor: "Conductor 2" },
        { duracion: 60, fecha: "2024-04-24T15:00:00", origen: "Casa", destino: "Supermercado", conductor: "Conductor 3" },
        { duracion: 50, fecha: "2024-04-24T18:00:00", origen: "Supermercado", destino: "Casa", conductor: "Conductor 4" },
        { duracion: 40, fecha: "2024-04-24T10:00:00", origen: "Casa", destino: "Parque", conductor: "Conductor 5" },
        { duracion: 55, fecha: "2024-04-24T14:00:00", origen: "Parque", destino: "Casa", conductor: "Conductor 6" },
        { duracion: 35, fecha: "2024-04-24T09:00:00", origen: "Casa", destino: "Gimnasio", conductor: "Conductor 7" },
        { duracion: 70, fecha: "2024-04-24T13:00:00", origen: "Gimnasio", destino: "Casa", conductor: "Conductor 8" },
        { duracion: 25, fecha: "2024-04-24T11:00:00", origen: "Casa", destino: "Restaurante", conductor: "Conductor 9" },
        { duracion: 80, fecha: "2024-04-24T16:00:00", origen: "Restaurante", destino: "Casa", conductor: "Conductor 10" }
    ] },

    { id: "user2", usuario: "usuario2", contraseña: "contraseña2", tipo: "usuario",viajes: [
        { duracion: 60, fecha: "2024-04-24T09:00:00", origen: "Casa", destino: "Trabajo", conductor: "Conductor 1" },
        { duracion: 35, fecha: "2024-04-24T13:00:00", origen: "Oficina", destino: "Casa", conductor: "Conductor 2" },
        { duracion: 50, fecha: "2024-04-24T10:00:00", origen: "Tienda", destino: "Supermercado", conductor: "Conductor 3" },
        { duracion: 45, fecha: "2024-04-24T15:00:00", origen: "Parque", destino: "Casa", conductor: "Conductor 4" },
        { duracion: 40, fecha: "2024-04-24T11:00:00", origen: "Gimnasio", destino: "Parque", conductor: "Conductor 5" },
        { duracion: 55, fecha: "2024-04-24T14:00:00", origen: "Cafetería", destino: "Casa", conductor: "Conductor 6" },
        { duracion: 30, fecha: "2024-04-24T12:00:00", origen: "Estación de tren", destino: "Gimnasio", conductor: "Conductor 7" },
        { duracion: 70, fecha: "2024-04-24T16:00:00", origen: "Centro comercial", destino: "Casa", conductor: "Conductor 8" },
        { duracion: 25, fecha: "2024-04-24T08:00:00", origen: "Biblioteca", destino: "Restaurante", conductor: "Conductor 9" },
        { duracion: 80, fecha: "2024-04-24T17:00:00", origen: "Estadio", destino: "Casa", conductor: "Conductor 10" }
    ]}
];

const conductores = [
    { 
        id: "driver1", 
        usuario: "conductor1", 
        contraseña: "contraseña1", 
        tipo: "conductor",
        usuariosLlevados: ["usuario1", "usuario2", "usuario3"], 
        montoTotalViajes: 20.00
    },
    { 
        id: "driver2", 
        usuario: "conductor2", 
        contraseña: "contraseña2", 
        tipo: "conductor",
        usuariosLlevados: ["usuario1", "usuario5"], 
        montoTotalViajes: 100.00 
    }
];
$(document).ready(() => {
    
    

    $("#login").click(() => {
        const usuario = $("#usuario").val();
        const contraseña = $("#password").val();
        let tipo = "";

        // Verificar credenciales de usuarios
        usuarios.forEach((credencial) => {
            if (usuario === credencial.usuario && contraseña === credencial.contraseña) {
                tipo = credencial.tipo;
                localStorage.setItem("usuario_id", credencial.id);
            }
        });

        if (!tipo) {
            conductores.forEach((credencial) => {
                if (usuario === credencial.usuario && contraseña === credencial.contraseña) {
                    tipo = credencial.tipo;
                    localStorage.setItem("usuario_id", credencial.id);
                }
            });
        }

        if (tipo === "usuario" || tipo === "conductor") {
            window.location.href = `dashboard_${tipo}.html`;
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Credenciales incorrectas. Por favor, inténtalo de nuevo.'
            });
        }
    });
});

document.getElementById('cerrarSesion').addEventListener('click', function () {
    localStorage.removeItem("usuario_id");
    location.href = "index.html";
});
// se añadió un cerrar sesión en ancho movil
document.getElementById('cerrarSesionToggle').addEventListener('click', function () {
    localStorage.removeItem("usuario_id");
    location.href = "index.html";
});