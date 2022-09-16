const inputTexto= document.querySelector(".inputTextArea");

const mensaje=document.querySelector(".ouputTextArea");
const btncopyMensaje=document.querySelector(".btn-copyclass");
btncopyMensaje.style.display = "none";
mensaje.style.display= "none";
//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`
function previsualizacion(){
    document.querySelector(".muneco").style.display="none";
    mensaje.style.display="";
    document.querySelector(".mensajeh2").style.display="none";
    document.querySelector(".mensajep").style.display="none";
    btncopyMensaje.style.display="";
}
function btnEncriptar(){
    previsualizacion();
    const ouputText= encriptar(inputTexto.value);
    mensaje.value = ouputText;  
}
function btnDesencriptar(){
   previsualizacion();
    const ouputText= desencriptar(inputTexto.value);
    mensaje.value = ouputText;  
}
function btnGit(){
    window.location.href = "https://www.linkedin.com/in/marco-antonio-chipana-condori-61a1041b2/";
}
function btnLinkedin(){
    window.location.href = "https://www.linkedin.com/in/marco-antonio-chipana-condori-61a1041b2/";
}   
// copiar
function btnCopy(){
    mensaje.select();
    document.execCommand('copy');
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value="";
    reset();
}
function reset(){
    document.querySelector(".mensajeh2").style.display="";
    document.querySelector(".mensajep").style.display="";
    document.querySelector(".muneco").style.display="";
    mensaje.style.display="none";
    btncopyMensaje.style.display="none";
}
function encriptar(inputString){
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["ufat","u"]];
    //convirte texto en pura minusculas
    inputString=inputString.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(inputString.includes(matrizCodigo[i][0])){
            inputString=inputString.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return inputString;
}
function desencriptar(inputString){
    let matrizCodigo=[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    //convirte texto en pura minusculas
    inputString=inputString.toLowerCase();

    for(let i=0;i<matrizCodigo.length;i++){
        if(inputString.includes(matrizCodigo[i][0])){
            inputString=inputString.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return inputString;
}