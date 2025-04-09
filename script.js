function saludar() {
    var campoNombre = document.getElementById("nombre");
    var nombre = campoNombre.value;
    if (nombre !== "") {
      console.log("¡Hola, " + nombre + "! Gracias por estar aquí");
    } 
    
    else {
      console.log("Por favor, escribe tu nombre.");
    }
  }
  