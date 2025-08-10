alert("Welcome to the Shopping Cart Application!");
document.getElementById("cart-count").innerText = 0;
document.getElementById("total-price").innerText = 0;      
document.getElementById("cart-items").innerHTML = '';
// script.js
let cartCount = 0;
let totalPrice = 0;

function addToCart(price, name) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ price: price, name: name });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById("cart-count").innerText = cart.length;
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total-price").innerText = total;
}

// On page load
if (localStorage.getItem('cart')) updateCartUI();
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("add-to-cart-btn").addEventListener("click", function() {
    const price = parseFloat(document.getElementById("item-price").innerText);
    const name = document.getElementById("item-name").innerText;
    addToCart(price, name);
  });
});
function clearCart() {
  localStorage.removeItem('cart');
  updateCartUI();
}
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (index >= 0 && index < cart.length) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
  }
}
function displayCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.innerText = `${item.name} - ₹${item.price.toFixed(2)}`;
    itemElement.className = "cart-item";
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.onclick = () => removeFromCart(index);
    itemElement.appendChild(removeButton);
    cartItems.appendChild(itemElement);
  });
}
document.getElementById("view-cart-btn").addEventListener("click", displayCart);
document.getElementById("clear-cart-btn").addEventListener("click", clearCart);
document.getElementById("cart-count").innerText = 0;
document.getElementById("total-price").innerText = 0;   
document.getElementById("cart-items").innerHTML = '';
function goToCheckout() {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    window.location.href = 'checkout.html';
}

