function limita(maximoCaracteres) {
    var elemento = document.getElementById("comment");
    if(elemento.value.length >= maximoCaracteres ) {
        return false;
    }
    else {
        return true;
    }
}

var comentario = document.getElementById("comment").value;
comentario.addEventListener("keypress",return limita(5));

/*function validacion() {

    var usuario = document.getElementById("name").value;
    var correo = document.getElementById("mail").value;
    var comentario = document.getElementById("comment").value;
    
    if( usuario == null || usuario.length == 0 || /^\s+$/.test(usuario) ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo debe tener un valor de...');
      return false;
  }
    else if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo debe tener un valor de...');
      return false;
  }
    else if (condicion que debe cumplir el último campo del formulario) {
      // Si no se cumple la condicion...
      alert('[ERROR] El campo debe tener un valor de...');
      return false;
  }
 
    // Si el script ha llegado a este punto, todas las condiciones
    // se han cumplido, por lo que se devuelve el valor true
    return true;
}*/

