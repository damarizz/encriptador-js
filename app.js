function encriptar(){
    let texto = document.getElementById("input_texto").value;
    let texto_encriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    let shown_text = document.querySelector('textarea');
    shown_text.innerHTML = texto_encriptado;
    console.log(texto_encriptado);
}

function desencriptar(){
    let texto_encriptado = document.getElementById("input_texto").value;
    let texto_desencriptado = texto_encriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    let shown_text = document.querySelector('textarea');
    shown_text.innerHTML = texto_desencriptado;
    console.log(texto_desencriptado);
}

function copiarTexto(){
    let copy_text = document.getElementById("output_texto");
    copy_text.select();
    copy_text.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copy_text.value);
    alert("¡Texto copiado!")
}