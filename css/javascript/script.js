function updateTextColor(elementId) {
    var element = document.getElementById(elementId);
    var bgColor = window.getComputedStyle(element).backgroundColor;
  
    // Convertir el color de fondo a RGB
    var matches = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(bgColor);
    var r = matches[1];
    var g = matches[2];
    var b = matches[3];
  
    // Calcular la luminancia (un indicador de cuán oscuro o claro es un color)
    var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Si el color de fondo es oscuro, establecer el color del texto a blanco; si es claro, establecerlo a negro
    if (luminance > 0.5) {
      element.style.color = "black";
    } else {
      element.style.color = "white";
    }
  }
  
  // Actualizar el color del texto para un elemento con el ID 'myElement'
  updateTextColor('myElement');
  