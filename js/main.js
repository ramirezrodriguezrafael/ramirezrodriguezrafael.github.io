const nav = document.getElementById("nav");
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const overlay = document.getElementById("overlay");

btnAbrir.addEventListener("click", () => {
  nav.classList.add("visible");
  overlay.classList.add("visible");
});

btnCerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("visible");
  overlay.classList.remove("visible");
});

const enlaces = document.querySelectorAll(".nav-list a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("visible");
        overlay.classList.remove("visible");
    });
});
