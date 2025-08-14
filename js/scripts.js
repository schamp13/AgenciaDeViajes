        // Event listener de el selector de numero de personas
const rangeInput = document.getElementById('customRange');
const rangeOutput = document.getElementById('personas');
rangeOutput.textContent = rangeInput.value;

rangeInput.addEventListener('input', function () {
rangeOutput.textContent = this.value;
});

document.getElementById('enviarSolicitud').addEventListener("click", function (e) {
    e.preventDefault(); // Evita recargar la página
});