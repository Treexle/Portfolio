// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-menu");
hamburger.onclick = () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
};
// Dropdown toggle for mobile
document.querySelectorAll(".dropdown > a").forEach((link) => {
  link.onclick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    }
  };
});

// Dark theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
function setTheme(dark) {
  if (dark) {
    body.classList.add("dark-theme");
    themeToggle.textContent = "☀️";
  } else {
    body.classList.remove("dark-theme");
    themeToggle.textContent = "🌙";
  }
}
// Persist theme in localStorage
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let dark =
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") && prefersDark);
setTheme(dark);
themeToggle.onclick = () => {
  dark = !body.classList.contains("dark-theme");
  setTheme(dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
};
