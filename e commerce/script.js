let cartCount = 0;

function addToCart(itemName, price) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${itemName} added to cart!`);
}

