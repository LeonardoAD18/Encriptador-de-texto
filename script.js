    // Poner focus el textarea de la seccion izquierda
    document.getElementById("seccion-izquierda__texto-ingresado").focus();

    // Guardar en la varibles lo que contienen las siguientes clases o id
    var contenedorH3 = document.querySelector(".seccion-derecha__contenedor-h3");
    var contenedorImg = document.querySelector(".seccion-derecha__contenedor-img");
    var contenedorMsj = document.querySelector(".seccion-derecha__contenedor-msj");
    var copiarOculto =  document.querySelector(".ocultar")
    var ocultarTextarea = document.querySelector("#seccion-derecha__ocultar-textarea");
    
    // función para encriptar el texto ingresado
    function encriptador(){
    // Reiniciar el nombre del botón    
    var botonCopiar = document.getElementById("copiar");
    botonCopiar.innerHTML = "Copiar";

    // Guarda el texto ingresado en el textarea de la seccion izquierda en la variable frase    
    var frase = document.getElementById("seccion-izquierda__texto-ingresado").value.toLowerCase();
    // Remplazo de las llaves para la encriptación
     encriptar = frase.replace    (/e/img, "enter");
     encriptar = encriptar.replace(/o/img, "ober");
     encriptar = encriptar.replace(/i/img, "imes");
     encriptar = encriptar.replace(/a/img, "ai");
     encriptar = encriptar.replace(/u/img, "ufat");

    //  Muestra en el textarea de la sección derecha la frase encriptada
     document.getElementById("seccion-derecha__contenedor-resultado").innerHTML = encriptar;
     document.getElementById("copiar").style.display =  "inherit";

     }

    // función para desencriptar el texo copiado del textarea sección izquierda
    function desencriptador(){
        
    // reiniciar el nombre del botón
    var botonCopiar = document.getElementById("copiar");
    botonCopiar.innerHTML = "Copiar";

    // Guarda el texto ingresado en el textarea de la sección izquierda en la variable frase     
    var frase = document.getElementById("seccion-izquierda__texto-ingresado").value.toLowerCase();

    // Remplazo de las llaves para la encriptación
    desencriptar = frase.replace       (/enter/img,"e");
    desencriptar = desencriptar.replace(/imes/img, "i");
    desencriptar = desencriptar.replace(/ober/img, "o");
    desencriptar = desencriptar.replace(/ai/img,   "a");
    desencriptar = desencriptar.replace(/ufat/img, "u");

    //  Muestra en el textarea de la sección derecha la frase desencriptada
    document.getElementById("seccion-derecha__contenedor-resultado").innerHTML = desencriptar;

    }

    // función para copiar el texto encriptado o desencriptado de la sección izquierda

    function copiar(){
    
    // Al copiar cambiamos el texto del botón a Copiado
    var botonCopiar = document.getElementById("copiar");
    botonCopiar.innerHTML = "Copiado";

    // Borra el texto del textarea de la seccion izquierda
    document.getElementById("seccion-izquierda__texto-ingresado").value = "";
    // Copia el texto del contenedor resultado
    var contenido = document.querySelector("#seccion-derecha__contenedor-resultado");
    contenido.select();
    document.execCommand("copy")

    }

    // función para ocultar los elementos HTML de la sección derecha, una vez ocultados, manda a llamar a la función encriptador

    function ocultar(){

        // Añade clases o id a los elementos HTML 
        contenedorH3.classList.add("ocultar");
        contenedorImg.classList.add("ocultar");
        contenedorMsj.classList.add("ocultar");
        copiarOculto.classList.add("btn-copiar");
        ocultarTextarea.setAttribute("id","seccion-derecha__ocultar-textarea");
        ocultarTextarea.id="seccion-derecha__contenedor-resultado";
        
        // Manda a llamar la función encriptador
        encriptador();

        }
    
     // Función para verificar que se ingreso o no texto, en el caso de que no se muestra un alerta y si existe texto se manda a llamar ocultar la cual contiene la funcion encriptador.

    function encriptarVacio(){

        var frase = document.getElementById("seccion-izquierda__texto-ingresado").value.toLowerCase();

        if( frase == ""){
               alert("No ingresó ningún texto")
          }else{
            ocultar();
           }

        }
  
    // Función para verificar que se ingreso o no texto, en el caso de que no se muestra un alerta y si existe texto se manda a llamar a la funcion desencriptador.

    function desencriptarVacio(){
        // Convierte el texto ingresado siempre a minusculas
        var frase = document.getElementById("seccion-izquierda__texto-ingresado").value.toLowerCase();

        if( frase == ""){
                   alert("No hay ningún texto para desencriptar")
          }else{
            desencriptador();
          }
        }

    // Activadores para llamar a las funciónes a través de los botones

    var botonEncriptar = document.querySelector("#btn-encriptar");
    botonEncriptar.onclick = encriptarVacio;

    var button = document.querySelector("#btn-desencriptar");
    button.onclick = desencriptarVacio;

    var button = document.querySelector("#copiar");
    button.onclick = copiar;
