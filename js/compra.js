document.getElementById("comprarBtn").addEventListener("click", function() {
    // Recuperar la información del usuario desde localStorage
    var usuarioJSON = localStorage.getItem("usuario");

    // Verificar si la información del usuario está disponible
    if (usuarioJSON) {
        var usuario = JSON.parse(usuarioJSON);

        // Realizar la compra y mostrar mensaje
        var mensajeCompra = "Compra exitosa:\n" +
                            "Producto: Reloj Inteligente\n" +
                            "Precio: 20 usd\n" +
                            "Usuario: " + usuario.nombre + " " + usuario.apellido + "\n" +
                            "Cédula: " + usuario.cedula + "\n" +
                            "Correo: " + usuario.correo;

        alert(mensajeCompra);

        // Puedes realizar acciones adicionales aquí, como enviar datos al servidor, etc.
    } else {
        alert("Debes registrarte antes de realizar la compra.");
        // Puedes redirigir al usuario a la página de registro u ofrecer opciones adicionales.
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var botonesCompra = document.querySelectorAll("[id^='comprarBtn']");
    var carritoBtn = document.querySelector(".nav-enlace");

    // Inicializar el array de compras si aún no existe
    var compras = JSON.parse(localStorage.getItem("compras")) || [];

    botonesCompra.forEach(function (boton) {
        boton.addEventListener("click", function () {
            var producto = this.closest(".producto");
            var nombre = producto.dataset.nombre;
            var valor = parseFloat(producto.dataset.valor);

            // Recuperar la información del usuario desde localStorage
            var usuarioJSON = localStorage.getItem("usuario");

            // Verificar si la información del usuario está disponible
            if (usuarioJSON) {
                var usuario = JSON.parse(usuarioJSON);

                // Realizar la compra y mostrar mensaje
                var mensajeCompra = "Compra exitosa:\n" +
                    "Producto: " + nombre + "\n" +
                    "Precio: " + valor + " usd\n" +
                    "Usuario: " + usuario.nombre + " " + usuario.apellido + "\n" +
                    "Cédula: " + usuario.cedula + "\n" +
                    "Correo: " + usuario.correo;

                alert(mensajeCompra);

                // Limpiar los datos después de la compra
                // Puedes modificar esto según la estructura específica de tu formulario
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("cedula").value = "";
                document.getElementById("correo").value = "";

                // Almacenar la compra en el array
                compras.push(mensajeCompra);

                // Actualizar el array en localStorage
                localStorage.setItem("compras", JSON.stringify(compras));

                // Puedes realizar acciones adicionales aquí, como enviar datos al servidor, etc.
            } else {
                alert("Debes registrarte antes de realizar la compra.");
                // Puedes redirigir al usuario a la página de registro u ofrecer opciones adicionales.
            }
        });
    });

    // Manejar clic en el botón "Ver Carrito"
    carritoBtn.addEventListener("click", function () {
        // Recuperar y mostrar las compras almacenadas en localStorage
        var comprasJSON = localStorage.getItem("compras");

        if (comprasJSON) {
            var compras = JSON.parse(comprasJSON);
            
            // Mostrar las compras de alguna manera (puedes modificar esto según tus necesidades)
            alert("Compras realizadas:\n" + compras.join("\n"));
        } else {
            alert("Aún no has realizado ninguna compra.");
        }
    });
});


