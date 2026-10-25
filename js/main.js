const WHATSAPP_NUMBER = "573227536064";

// Año del copyright siempre actualizado
document.querySelector("#year").textContent = new Date().getFullYear();

// Menú móvil
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#menu");

toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", isOpen);
  toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

// Cierra el menú al elegir una opción
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }
});

// Los enlaces "Cotizar..." de cada servicio preseleccionan el servicio en el formulario
const servicioSelect = document.querySelector("#servicio");

document.querySelectorAll("[data-servicio]").forEach((link) => {
  link.addEventListener("click", () => {
    servicioSelect.value = link.dataset.servicio;
  });
});

// Formulario: arma el mensaje y abre WhatsApp
const form = document.querySelector("#form-cotizar");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const message =
    `Hola Addict Design, soy ${data.get("nombre").trim()}.\n` +
    `Vehículo: ${data.get("vehiculo").trim()}\n` +
    `Servicio: ${data.get("servicio")}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});
