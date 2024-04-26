document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("myModal");
  const cartBtn = document.getElementById("cartBtn");
  const closeBtn = document.getElementsByClassName("close")[0];
  const cerrarBtn = document.querySelector(".cerrar-btn");

  // Mostrar la ventana modal cuando se hace clic en el ícono del carrito
  cartBtn.onclick = function() {
      modal.style.display = "block";
  }

  // Ocultar la ventana modal cuando se hace clic en el botón de cerrar (x)
  closeBtn.onclick = function() {
      modal.style.display = "none";
  }

  // Ocultar la ventana modal cuando se hace clic fuera de ella
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Ocultar la ventana modal cuando se hace clic en el botón de cerrar
  cerrarBtn.onclick = function() {
      modal.style.display = "none";
  }

  // Agregar funcionalidad al botón de eliminar
  modal.addEventListener('click', function(event) {
      if (event.target.classList.contains('eliminar')) {
          event.target.closest('tr').remove();
      }
  });

  const pagarBtn = document.querySelector('.pagar-btn');

  // Manejar clic en el botón Pagar
  pagarBtn.addEventListener('click', function() {
      // Obtener la información de la modal
      const cartTableBody = document.querySelector("#cartTable tbody");
      const productos = [];
      const filas = cartTableBody.querySelectorAll('tr');

      filas.forEach(fila => {
          const id = fila.cells[0].textContent;
          const nombre = fila.cells[1].textContent;
          const cantidad = fila.cells[2].textContent;
          const precio = fila.cells[3].textContent;
          const total = fila.cells[4].textContent;
          productos.push({ id, nombre, cantidad, precio, total });
      });

      const total = calcularTotalPagar();

      // Construir la URL con los parámetros de la información de la modal
      const url = `formulario.html?productos=${encodeURIComponent(JSON.stringify(productos))}&total=${encodeURIComponent(total)}`;

      // Redirigir al cliente a la página del formulario con la información de la modal
      window.location.href = url;
  });

  // Función para calcular el total a pagar
  function calcularTotalPagar() {
      const cartTableBody = document.querySelector("#cartTable tbody");
      const filas = cartTableBody.querySelectorAll('tr');
      let total = 0;

      filas.forEach(fila => {
          total += parseFloat(fila.cells[4].textContent.replace('$', ''));
      });

      return total.toFixed(2);
  }
});

