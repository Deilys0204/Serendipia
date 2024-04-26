    const modal = document.getElementById("myModal");
    const cartBtn = document.getElementById("cartBtn");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Mostrar la ventana modal cuando se hace clic en el ícono del carrito
    cartBtn.onclick = function() {
      modal.style.display = "block";
    }

    // Ocultar la ventana modal cuando se hace clic en el botón de cerrar
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }

    // Ocultar la ventana modal cuando se hace clic fuera de ella
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

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
      });

      