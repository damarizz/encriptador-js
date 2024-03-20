let texto_encriptado = ""; // Declarar la variable globalmente para que sea accesible en las funciones.

function encriptar() {
    let texto = document.getElementById("input_text").value;
    if (texto.trim() === "") {
        alert("Por favor ingresa un texto para encriptar.");
        return;
    }
    texto_encriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    let shown_text = document.getElementById("output_text");
    shown_text.value = texto_encriptado;
    console.log(texto_encriptado);
}

function desencriptar() {
    if (texto_encriptado.trim() === "") {
        alert("No hay texto encriptado para desencriptar.");
        return;
    }
    let texto_desencriptado = texto_encriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    let shown_text = document.getElementById("output_text");
    shown_text.value = texto_desencriptado;
    console.log(texto_desencriptado);
}

function copiarTexto() {
    if (texto_encriptado.trim() === "") {
        alert("No hay texto para copiar. Por favor, encripta o desencripta primero.");
        return;
    }
    let copy_text = document.getElementById("output_text");
    copy_text.select();
    copy_text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy_text.value);
    alert("¡Texto copiado!");
}
