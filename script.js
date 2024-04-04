document.getElementById("login").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value.trim();
    var edad = parseInt(document.getElementById("edad").value.trim());
    var correo = document.getElementById("correo").value.trim();

    if (nombre === "" || edad === "" || correo === "") {
        showMessage("Todos los campos son obligatorios.");
        return;
    }

    if (edad < 13) {
        showMessage("Es demasiado joven para registrarse en esta pagina");
        return;
    }
    if (edad > 135) {
        showMessage("Es demasiado viejo para registrarse en esta pagina");
        return;
    }

    if (!validateEmail(correo)) {
        showMessage("El correo no tiene un formato válido.");
        return;
    }

    showMessage("Datos enviados correctamente.");

    setTimeout(function() {
        window.location.href = "confirmacion.html";
    }, 2000);
});

function showMessage(message) {
    document.getElementById("mensaje").textContent = message;
}

function validateEmail(email) {
    var validDomains = ["@gmail.com", "@outlook.com", "@hotmail.com", "@yahoo.com", "@bue.edu.ar"];
    for (var i = 0; i < validDomains.length; i++) {
        if (email.includes(validDomains[i])) {
            return true;
        }
    }
    return false;
}