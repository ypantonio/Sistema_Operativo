//FUNCION VENTANA
function activacion() {
    var x = document.getElementById('ventana');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EVENTO
block.addEventListener('click' , activacion);
/******************************************************************* */
function ocultar() {
    var x = document.getElementById('ventana');
    if (x.style.display === "none") {
       
    } else {
        x.style.display = "none";
    }
}
//EVENTO
close.addEventListener('click' , ocultar);

/******************************************************************* */
//FUNCION MENU
function activar() {
    var x = document.getElementById('menu2');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EVENTO
inicio.addEventListener('click' , activar);