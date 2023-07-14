const products = document.getElementById("products");
const cart = document.getElementById("cart");
let cartObj = localStorage.getItem("cart");

const goToProductPage = (id) => {
  const product = {
    image: document.getElementById(`product-image-${id}`).src,
    title: document.getElementById(`product-title-${id}`).textContent,
    price: document.getElementById(`product-price-${id}`).innerText,
  };

  localStorage.setItem("product", JSON.stringify(product));
  window.location.href = `${window.location.pathname}/product.html`;
};

const updateCart = (cartObj) => {
  let html = ``;
  cartObj.forEach((product) => {
    html += `
      <div class="card">
        <img
          src="${product.image}"
          alt="product-image"
          class="product-image"
          onclick="goToProductPage(${product.id})"
        />
        <h2 class="product-title" onclick="goToProductPage(${product.id})">
            ${product.title}
        </h2>
        <div class="product-price">Price: ${product.price}</div>
        <div class="btn">Buy</div>
      </div>`;
  });
  cart.innerHTML = html;
};

const addCart = (id) => {
  let cartObj = localStorage.getItem("cart");
  if (!cartObj) {
    localStorage.setItem("cart", JSON.stringify([]));
  }
  cartObj = JSON.parse(localStorage.getItem("cart"));

  const isExisting = cartObj.some((cart) => cart.id === id);

  if (!isExisting) {
    cartObj.push({
      id: id,
      image: document.getElementById(`product-image-${id}`).src,
      title: document.getElementById(`product-title-${id}`).textContent,
      price: document.getElementById(`product-price-${id}`).innerText,
    });
    localStorage.setItem("cart", JSON.stringify(cartObj));
    updateCart(cartObj);
  }
};

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    let html = ``;
    data.forEach((product) => {
      const id = product.id;
      const image = product.image;
      const title = product.title;
      const price = product.price;
      html += `
        <div class="card">
        <img
          src="${image}"
          alt="product-image"
          class="product-image"
          id="product-image-${id}"
          onclick="goToProductPage(${id})"
          />
        <h2 class="product-title" id="product-title-${id}" onclick="goToProductPage(${id})">${title}</h2>
        <div class="product-price" id="product-price-${id}">Price: <span id="product-price-${id}">${price}</span></div>
        <div class="btn" onclick="addCart(${id})">Add to Cart</div>
      </div>`;
    });
    products.innerHTML = html;
  })
  .catch(() => {
    products.innerHTML = "<div>Something went wrong!</div>";
  });

if (cartObj) {
  updateCart(JSON.parse(cartObj));
}
