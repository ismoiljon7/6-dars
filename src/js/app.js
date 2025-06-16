import { products } from "./data.js";

const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.theme = savedTheme;
  themeToggler.checked = savedTheme === "luxury";
}

themeToggler.addEventListener("change", () => {
  const newTheme = themeToggler.checked ? "luxury" : "light";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
});

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

products.forEach((product) => {
  const clone = template.content.cloneNode(true);

  clone.querySelector(".card-image").src = product.thumbnail;
  clone.querySelector(".card-image").alt = product.title;
  clone.querySelector(".card-title").textContent = product.title;
  clone.querySelector(
    ".rating"
  ).textContent = `⭐ ${product.rating} (${product.reviews} sharhlar)`;
  clone.querySelector(".description").textContent = product.description;
  clone.querySelector(".price").textContent = product.oldPrice;
  clone.querySelector(".discount-price").textContent = product.newPrice;

  productsList.appendChild(clone);
});

document.getElementById("product-count").textContent = products.length;

document.getElementById("year").textContent = new Date().getFullYear();
