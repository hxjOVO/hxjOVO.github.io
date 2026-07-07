const year = document.querySelector("#year");
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light",
  );
});
