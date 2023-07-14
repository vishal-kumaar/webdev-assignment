const main = document.getElementsByTagName("main")[0];
let product = localStorage.getItem("product");

if (product) {
  product = JSON.parse(product);
  main.innerHTML = `
    <img
        src="${product.image}"
        alt="product-image"
        class="product-image" />
      <div class="right">
        <h1 class="product-title">${product.title}</h1>
        <p class="product-price">Price: ${product.price}</p>
        <button class="btn">Buy Now</button>
      </div>
    `;
}
