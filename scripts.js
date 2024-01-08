document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí va el código para validar el correo electrónico y la contraseña con el servidor.

    if (email && password) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Error en el correo electrónico o la contraseña');
    }
});