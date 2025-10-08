// === Variables configurables ===
const CTA = {
  text: "💖 Comparte momentos especiales con estilo. Descubre más plantillas creadas para sorprender.",
  button: "💎 Ver más plantillas"
};

// === Inserta el contenido dinámicamente cuando la página esté lista ===
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("mgcta-footer");
  if (footer) {
    // 🔹 Lee la URL directamente desde el HTML
    const url = footer.getAttribute("data-url") || "#";

    footer.innerHTML = `
      ${CTA.text}
      <a href="${url}" target="_blank" class="mgcta-btn">
        ${CTA.button}
      </a>
    `;
  }
});
