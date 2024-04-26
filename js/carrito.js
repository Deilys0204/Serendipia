document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.product button[data-id]');
    const cartBubble = document.querySelector('.cart-badge');
    let quantity = parseInt(cartBubble.textContent);

    addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
        quantity++;
        updateCartBadge();
      });
    });

    function updateCartBadge() {
      cartBubble.textContent = quantity;
    }
  });

  

