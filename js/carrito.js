document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll('.product button[data-id]');
  const cartBubble = document.querySelector('.cart-badge');
  const modal = document.getElementById("myModal");
  const cartTableBody = document.querySelector("#cartTable tbody");
  const closeBtn = document.querySelector(".close");
  const cerrarBtn = document.querySelector(".cerrar-btn");
  let carrito = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const id = parseInt(button.getAttribute('data-id'));
      const nombre = button.parentElement.querySelector('p').textContent;
      const precio = parseFloat(button.parentElement.querySelector('.product-price').textContent.replace('$', '').replace(',', ''));
      agregarAlCarrito(id, nombre, precio);
      updateCartBadge();
      actualizarVentanaModal();
    });
  });

  function agregarAlCarrito(id, nombre, precio) {
    const productoExistente = carrito.find(producto => producto.id === id);
    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carrito.push({ id, nombre, precio, cantidad: 1 });
    }
  }

  function updateCartBadge() {
    const quantity = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    cartBubble.textContent = quantity;
  }

  function actualizarVentanaModal() {
    cartTableBody.innerHTML = '';
    let totalCompra = 0;
    const productosAgregados = {};

    carrito.forEach((producto) => {
      if (!productosAgregados[producto.id]) {
        productosAgregados[producto.id] = true;

        const cantidadTotal = carrito.reduce((total, p) => {
          if (p.id === producto.id) {
            return total + p.cantidad;
          }
          return total;
        }, 0);

        const subtotal = producto.precio * cantidadTotal;
        totalCompra += subtotal;

        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${producto.id}</td>
          <td>${producto.nombre}</td>
          <td>${cantidadTotal}</td>
          <td>${formatPrice(producto.precio)}</td>
          <td>${formatPrice(subtotal)}</td>
          <td><button class="eliminar" data-id="${producto.id}">Eliminar</button></td>
        `;
        cartTableBody.appendChild(fila);
      }
    });

    // Agregar fila para mostrar el total de la compra
    const filaTotal = document.createElement('tr');
    filaTotal.innerHTML = `
      <td colspan="4" style="text-align: right;">Total:</td>
      <td>${formatPrice(totalCompra || 0)}</td>
      <td></td>
    `;
    cartTableBody.appendChild(filaTotal);
  }

  // Function to format price to display in thousands (COP)
  function formatPrice(price) {
    return `$${price.toFixed(2)}`;
  }

  modal.addEventListener('click', function(event) {
    if (event.target.classList.contains('eliminar')) {
      const id = parseInt(event.target.getAttribute('data-id'));
      const index = carrito.findIndex(producto => producto.id === id);
      carrito.splice(index, 1);
      actualizarVentanaModal();
      updateCartBadge();
    }
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  cerrarBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});