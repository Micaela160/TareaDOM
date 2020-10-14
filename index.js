alert ("Bienvenidos a mi sitio!")


let reply = confirm ("Está seguro de querer avanzar?")

if (reply == false) {
    let falseReply = document.querySelector (".hdos");
    falseReply.innerHTML = "Lamentamos que no quieras continuar tu visita por este sitio increíble"
}

else {
    let trueReply = document.querySelector (".hdos");
trueReply.innerHTML = "¡Qué alegría que quieras seguir con tu visita por este maravilloso sitio!"
}


let name = prompt ("Cuál es su nombre?");
console.log (name);

let saludo = document.querySelector (".huno");
saludo.innerHTML = "Bienvenidx " + name;



let edad = prompt ("Cuántos años tiene?");
let acceso = document.querySelector ("body");

if (edad < 18) {
    acceso.style.display= "none"
}


let modoOscuro = confirm ("Quiere utilizar el modo oscuro?")

if (modoOscuro == true) {
    acceso.style.backgroundColor = "dimgray";
    acceso.style.color = "white"
}

let diaDeSemana = "Domingo"

if (diaDeSemana == "Domingo") {
    body.innerHTML = "Hoy es día de descanso!"
}