// ===== Product Data =====
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    image: "https://via.placeholder.com/220x180.png?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://via.placeholder.com/220x180.png?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 1999,
    image: "https://via.placeholder.com/220x180.png?text=Shoes"
  },
  {
    id: 4,
    name: "Backpack",
    price: 999,
    image: "https://via.placeholder.com/220x180.png?text=Backpack"
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 599,
    image: "https://via.placeholder.com/220x180.png?text=Sunglasses"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 1299,
    image: "https://via.placeholder.com/220x180.png?text=Speaker"
  }
];

// ===== Cart Data =====
let cart = [];

// ===== Load Products on Page Load =====
function loadProducts() {
  const grid = document.getElementById("product-grid");
  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    grid.appendChild(card);
  });
}

// ===== Add to Cart =====
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// ===== Remove from Cart =====
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

// ===== Update Cart UI =====
function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = "";
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    count += item.quantity;

    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <span>${item.name} x ${item.quantity}</span>
      <span>₹${item.price * item.quantity}</span>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  cartCount.textContent = count;
  cartTotal.textContent = total;
}

// ===== Toggle Cart Sidebar =====
function toggleCart() {
  const sidebar = document.getElementById("cart-sidebar");
  sidebar.classList.toggle("open");
}

// ===== Checkout =====
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Thank you for your purchase! Total amount: ₹" + document.getElementById("cart-total").textContent);
  cart = [];
  updateCart();
  toggleCart();
}

// ===== Contact Form Submission =====
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  document.getElementById("form-status").textContent = `Thank you, ${name}! Your message has been sent.`;

  e.target.reset();
});

// ===== Initialize =====
loadProducts();