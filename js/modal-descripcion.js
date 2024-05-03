// Obtener el modal de producto
var productModal = document.getElementById("productModal");

// Obtener el elemento de imagen, nombre y descripción en el modal
var modalImg = document.getElementById("modalImg");
var modalName = document.getElementById("modalName");
var modalDescription = document.getElementById("modalDescription");

// Obtener todos los elementos de producto
var products = document.querySelectorAll(".product");

// Iterar sobre cada producto
products.forEach(function(product) {
  // Agregar el evento click a cada producto
  product.addEventListener("click", function(event) {
    // Verificar si se hizo click en el botón "Añadir al carrito"
    if (!event.target.matches("button")) {
      // Obtener la fuente de la imagen, nombre y descripción del producto clicado
      var imgSrc = product.querySelector("img").src;
      var name = product.querySelector(".product-name").textContent;
      var description = product.querySelector(".product-description").textContent;

      // Establecer la fuente de la imagen, nombre y descripción en el modal
      modalImg.src = imgSrc;
      modalName.textContent = name;
      modalDescription.textContent = description;

      // Mostrar el modal
      productModal.style.display = "block";
    }
  });
});

// Obtiene el elemento <span> que cierra el modal
var span = document.querySelector(".modal-close");

// Cuando se hace clic en <span> (x), cerrar el modal
span.addEventListener("click", function() {
  productModal.style.display = "none";
});

// Cuando se hace clic fuera del modal, cerrarlo
window.addEventListener("click", function(event) {
  if (event.target === productModal) {
    productModal.style.display = "none";
  }
});
