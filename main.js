// Array para almacenar los objetos del inventario
var inventario = [];

// Función para mostrar mensajes de texto en una ventana emergente
function mostrarMensaje(mensaje) {
  alert(mensaje);
}

// Función para mostrar el inventario
function mostrarInventario() {
  var inventarioStr = "Inventario:\n";
  if (inventario.length === 0) {
    inventarioStr += "El inventario está vacío.";
  } else {
    for (var i = 0; i < inventario.length; i++) {
      inventarioStr += (i + 1) + ". " + inventario[i] + "\n";
    }
  }
  mostrarMensaje(inventarioStr);
}

// Función para pedir al jugador que tome una decisión
function tomarDecision(decision1, decision2, decision3, decision4 = null) {
    let texto4 = "";
    if (decision4 != null) {
        texto4 = "\n4. " + decision4;
    }
  var decision = prompt(
    "Escoge una opción:\n1. " + decision1 + "\n2. " + decision2 + "\n3. " + decision3 +texto4+ "\n\nInventario: " + inventario.join(", ")
  );
  return decision;
}

// Función para iniciar el juego
function iniciarJuego() {
  mostrarMensaje("¡Bienvenido a la última frontera, Comandante!");
  mostrarMensaje("Después del desastre de la misión Galatea, eres el único sobreviviente.");
  mostrarMensaje("Tu nave está gravemente dañada y necesitas recolectar los componentes esenciales para su reparación.");
  menuPrincipal();
}

// Función para mostrar el menú principal
function menuPrincipal() {
    var opcion = tomarDecision("Explorar", "Ver inventario", "Salir");
  
    if (opcion === "1") {
      explorar();
    } else if (opcion === "2") {
      mostrarInventario();
      menuPrincipal();
    } else if (opcion === "3") {
      mostrarMensaje("¡Hasta luego!");
    } else {
      mostrarMensaje("¡Opción no válida!");
      menuPrincipal();
    }
  }

// Función para explorar
function explorar() {
    mostrarMensaje("¿A dónde quieres explorar?");
    var opcion = tomarDecision("Planeta cercano", "Campo de asteroides", "Lugar inexplorado", "Volver");
  
    if (opcion === "1") {
      explorarPlaneta();
    } else if (opcion === "2") {
      investigarAsteroides();
    } else if (opcion === "3") {
      investigarUniverso();
    } else if (opcion === "4") {
      menuPrincipal();
    } else {
      mostrarMensaje("¡Opción no válida!");
      explorar();
    }
  }

// Función para explorar un planeta
function explorarPlaneta() {
  mostrarMensaje("Has aterrizado en un planeta desconocido y hostil.");
  var objetoRecogido = buscarRecursos();
  if (objetoRecogido) {
    agregarAlInventario(objetoRecogido);
    mostrarMensaje("¡Has encontrado " + objetoRecogido + "!");
  } else {
    mostrarMensaje("No has encontrado nada útil en este planeta. Vuelve a intentarlo.");
  }
  explorar();
}

// Función para investigar un campo de asteroides
function investigarAsteroides() {
  mostrarMensaje("Te adentras en el campo de asteroides, lleno de peligros y minerales preciosos.");
  var objetoRecogido = recogerMinerales();
  if (objetoRecogido) {
    agregarAlInventario(objetoRecogido);
    mostrarMensaje("¡Has encontrado " + objetoRecogido + "!");
  } else {
    mostrarMensaje("No has tenido suerte en la búsqueda de minerales. Vuelve a intentarlo.");
  }
  explorar();
}

function investigarUniverso() {
    let fin;
    mostrarMensaje("Encuentras un nuevo sistema solar con signos de civilización avanzada.");
    var opcion = tomarDecision("Aproximarse para comunicar", "Observar a distancia", "Volver");
  
    if (opcion === "1") {
      fin = interactuarConAliens();
    } else if (opcion === "2") {
      mostrarMensaje("Observas el sistema a distancia y tomas notas para futuras investigaciones.");
      explorar();
    } else if (opcion === "3") {
      explorar();
    } else {
      mostrarMensaje("¡Opción no válida!");
      investigarUniverso();
    }
  }

  function interactuarConAliens() {
    mostrarMensaje("Una figura alienígena te ofrece un trato: Minerales a cambio de información sobre la amenaza cósmica.");
    var opcion = tomarDecision("Aceptar el trato", "Rechazar", "Pedir más información");
  
    if (opcion === "1") {
      if (inventario.includes("Minerales de Asteroides")) {
        mostrarMensaje("Intercambias los minerales y recibes datos cruciales sobre la amenaza.");
        agregarAlInventario("Datos de la Amenaza");
        verificarFinDelJuego();
        if (inventario.includes("Datos de la Amenaza") && inventario.includes("Minerales de Asteroides")) {
          return true;
        }
      } else {
        mostrarMensaje("No tienes los minerales necesarios para el intercambio.");
      }
      explorar();
    } else if (opcion === "2") {
      mostrarMensaje("Decides no arriesgarte y continúas tu viaje.");
      explorar();
    } else if (opcion === "3") {
      mostrarMensaje("La figura te cuenta sobre un antiguo mal que se despierta en la galaxia.");
      interactuarConAliens();
    } else {
      mostrarMensaje("¡Opción no válida!");
      interactuarConAliens();
    }
  }
function verificarFinDelJuego() {
  if (inventario.includes("Datos de la Amenaza") && inventario.includes("Minerales de Asteroides")) {
    mostrarMensaje("Con los minerales y los datos recogidos, finalmente puedes reparar tu nave y volver a casa.");
    mostrarMensaje("¡Felicidades, Comandante! Has completado la misión y salvado la humanidad.");
    
  } else {
    mostrarMensaje("Aún te faltan recursos para completar la reparación de la nave.");
  }
}

// Función para buscar recursos en un planeta
function buscarRecursos() {
  var random = Math.random();
  if (random < 0.5) {
    return "Recursos del Planeta";
  } else {
    return null; // No se encuentra nada
  }
}

// Función para recoger minerales en un campo de asteroides
function recogerMinerales() {
  var random = Math.random();
  if (random < 0.5) {
    return "Minerales de Asteroides";
  } else {
    return null; // No se encuentra nada
  }
}

// Función para agregar un objeto al inventario
function agregarAlInventario(objeto) {
  inventario.push(objeto);
}

// Iniciar el juego
iniciarJuego();