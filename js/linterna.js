let estadoLinterna = "apagado"
/*sonidos*/
let sonidooBatman = document.querySelector ("#bati_encendido");
let sonidoBoton = document.querySelector ("#bati_click");

/*divs*/

let batman=  document.querySelector ("#batman");
let boton= document.querySelector ("#bati_boton");

boton.addEventListener ("click", ()=>{
    controlarBatman()
}); /*addevenlisnener va a estar a la escucha de lo que suceda cuando se apriete el boton , en este ejemplo dice, cuando hagas click
 en el boton, vas a ejecutar controlar batman 

/*mi funcion controlarBatman va a hacer lo que dicen los condicionales*/
function controlarBatman (){ 
/* condicionales */
  /* si el estado de la linterna es == apagado, (que vas a hacer son las {})le quiero cambiar el sentido  
  me devuelve un bolean (true o false)*/

  if (estadoLinterna == "apagado"){
    estadoLinterna = "encendido";
    sonidoLinterna()
       /* le asigno el valor si esta == apagado a encendido */
    batman.classList.add("batman_activo"); /* cuando pase a encendido, a batman se le agrega ua clase llamada "batman acitvo" q 
    es la clase que contiene la imagen con moviemiento */
}else{
    estadoLinterna = "apagado";
    sonidoLinterna ()/* si hago click y lo apago se quita la clase batman_activo*/
    batman.classList.remove("batman_activo");
}}

function sonidoLinterna () {
    if (sonidooBatman.paused){ /* es paused pq esta a la escucha de si el sonido esta o no actico*/
    sonidoBoton.play();
    sonidooBatman.play();
}else{
    sonidoBoton.play();
    sonidooBatman.pause();
    sonidooBatman.currentTime= 0; /* aca es pause pq hace la accion de pausarlo*/
}

}

