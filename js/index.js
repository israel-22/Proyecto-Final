document.getElementById("registroBtn").addEventListener("click", function () {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cedula = document.getElementById("cedula").value;
    var correo = document.getElementById("correo").value;
    var contrasenia = document.getElementById("contrasenia").value;

    // Crear un objeto con los datos del usuario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        correo: correo,
        contrasenia: contrasenia
    };

    // Convertir el objeto a formato JSON y almacenarlo en localStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));

    // Mostrar un mensaje de registro exitoso
    alert("Registro exitoso:\nNombre: " + nombre + "\nApellido: " + apellido + "\nCédula: " + cedula + "\nCorreo: " + correo + "\nContrasenia: " + contrasenia);

    // Limpiar los campos después del registro exitoso
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("cedula").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("contrasenia").value = "";

    // Manejar clic en el botón "Ver Carrito"
    var carritoBtn = document.querySelector(".nav-enlace");
    carritoBtn.addEventListener("click", function () {
        // Redirigir a la página del carrito al hacer clic en "Ver Carrito"
        window.open("carrito.html", "_blank");
    });
});
