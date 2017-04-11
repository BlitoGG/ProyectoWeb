function limita(elEvento, maximoCaracteres) {
  var elemento = document.getElementById("comment");

  // Obtener la tecla pulsada
  var evento = elEvento || window.event;
  var codigoCaracter = evento.charCode || evento.keyCode;
  // Permitir utilizar las teclas con flecha horizontal
  if(codigoCaracter == 37 || codigoCaracter == 39) {
    return true;
  }

  // Permitir borrar con la tecla Backspace y con la tecla Supr.
  if(codigoCaracter == 8 || codigoCaracter == 46) {
    return true;
  }
  else if(elemento.value.length >= maximoCaracteres ) {
    return false;
  }
  else {
    return true;
  }
}

function actualizaInfo(maximoCaracteres) {
    var elemento = document.getElementById("comment");
    var info = document.getElementById("info");

    if(elemento.value.length > maximoCaracteres ) {
        info.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
        info.classList.remove("text-danger");
        info.classList.add("text-primary");
    }
    else if(elemento.value.length==500){
        info.innerHTML = "Máximo "+maximoCaracteres+" caracteres";
        info.classList.remove("text-primary");
        info.classList.add("text-danger");
    }
    else{
        info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-elemento.value.length)+" caracteres adicionales";
        info.classList.remove("text-danger");
        info.classList.add("text-primary");
    }

}

function valida() {

    var usuario = document.getElementById("nombre").value;
    var correo = document.getElementById("mail").value;
    var comentario = document.getElementById("comment").value;
    
    if( usuario == null || usuario.length == 0 || /^([a-zñáéíóú]+[\s]*)+$/.test(usuario) ) {
      // Si no se cumple la condicion...
      alert('[ERROR] Nombre');
      return false;
  }
    else if( correo == null || correo.length == 0 || /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(correo) ) {
      // Si no se cumple la condicion...
      alert('[ERROR] Correo');
      return false;
  }
    if( comentario == null || comentario.length == 0 || /^\s+$/.test(comentario) ) {
      // Si no se cumple la condicion...
      alert('[ERROR] Comentario');
      return false;
  }
 
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}

