function encriptar(){
    let texto = document.getElementById("input_texto").value;
    let texto_encriptado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    console.log(texto_encriptado);
}

function desencriptar(){
    let texto_encriptado = document.getElementById("input_texto").value;
    let texto_desencriptado = texto_encriptado.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    console.log(texto_desencriptado);
}
