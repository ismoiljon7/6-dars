const html = document.documentElement;
const themeToggler = document.getElementById("theme-toggler");

// Oldindan saqlangan theme ni o‘qib tiklash
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.dataset.theme = savedTheme;
  themeToggler.checked = savedTheme === "luxury";
}

// Tugma bosilganda theme almashtirish
themeToggler.addEventListener("click", () => {
  const newTheme = html.dataset.theme === "light" ? "luxury" : "light";
  html.dataset.theme = newTheme;
  localStorage.setItem("theme", newTheme);
  themeToggler.checked = newTheme === "luxury";
});
