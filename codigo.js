function Agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function Eliminar() {
    document.getElementById("pantalla").value = "";
}

function Calcular() {
    document.getElementById("pantalla").value = eval(document.getElementById("pantalla").value);
}

function CambiarImagen(id, nuevaRuta) {
    document.getElementById(id).src = nuevaRuta;
}