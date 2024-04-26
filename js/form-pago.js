
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code for modal elements (optional, comment out if not used)
  
    // Agregar evento al botón "Pagar" para mostrar el alert
    const pagarBtn = document.getElementById("pagar-btn");
    pagarBtn.addEventListener('click', function() {
      alert("Su pago fue procesado con exito, su pedido va en camino");
    });
  });
