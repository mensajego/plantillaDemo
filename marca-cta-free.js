// === Variables configurables ===
const CTA = {
  text: "💖 Comparte momentos especiales con estilo. Descubre más plantillas creadas para sorprender.",
  button: "💎 Ver más plantillas",
  url: "https://tu-enlace-de-compra.com"
};

// === Inserta el contenido dinámicamente cuando la página esté lista ===
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("mgcta-footer");
  if (footer) {
    footer.innerHTML = `
      ${CTA.text}
      <a href="${CTA.url}" target="_blank" class="mgcta-btn">
        ${CTA.button}
      </a>
    `;
  }
});
