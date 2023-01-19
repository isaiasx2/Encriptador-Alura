
// VARIABLES


const mensajeEntrada = document.querySelector("#mensajeEntrada");
const mensajeSalida = document.querySelector("#mensajeSalida");
const textos = document.querySelector("#textos");

const encriptarBtn = document.querySelector("#encriptar");
const desencriptarBtn = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

// FUNCIONES 

function encriptar(){
    const mensaje = mensajeEntrada.value;

    const mensajeEncriptado = mensaje
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("o","ober")
    .replaceAll("a","ai")
    .replaceAll("u","ufat");

    mensajeSalida.value = mensajeEncriptado;
    if(mensajeEntrada.value != ""){
        mensajeSalida.style.background = "none";
        textos.style.display = "none"
    }
    
};
function desencriptar(){
    const mensajeEncriptado = mensajeSalida.value;

    const mensajeDesencriptado = mensajeEncriptado
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ai","a")
    .replaceAll("ufat","u");
    
    mensajeSalida.value = mensajeDesencriptado;
    if(mensajeEntrada.value != ""){
        mensajeSalida.style.background = "none";
        textos.style.display = "none"
    }
}
 function copiar(){
    if(mensajeSalida.value != ""){
    const mensajeEncriptado = mensajeSalida.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    alert("Mensaje copiado!")
    }
}


// BOTONES
encriptarBtn.onclick = encriptar;

desencriptarBtn.onclick = desencriptar;

btnCopiar.onclick = copiar;

