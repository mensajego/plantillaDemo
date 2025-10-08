// ======== CONFIGURACIÓN GENERAL ========

// 🪶 Marca de agua
const WATERMARK = {
  title: "DEMO",
  message: "Mensaje",
  highlight: "Go"
};

// 💎 CTA inferior
const CTA = {
  text: "💌💌 ¿Te gusta esta plantilla? Consigue la versión completa sin marca de agua y compártela con <strong>esa persona especial</strong>.",
  button: "💎 Obtener versión completa"
  // 👇 Eliminamos la URL de aquí
};

// 📝 Nota de pie
const FOOTER_NOTE = "Modo demo — Solo para mostrar el diseño.";

// ======== INSERCIÓN AUTOMÁTICA ========
document.addEventListener("DOMContentLoaded", () => {
  // Inserta la marca de agua
  const watermarkEl = document.getElementById("mgw-watermark");
  if (watermarkEl) {
    watermarkEl.innerHTML = `
      ${WATERMARK.title}<br>
      <span class="mgw-mensaje">${WATERMARK.message}<span class="mgw-go">${WATERMARK.highlight}</span></span>
    `;
  }

  // Inserta el CTA
  const footerCTA = document.getElementById("mgcta-footer");
  const ctaBtn = document.getElementById("mgcta-btn");
  if (footerCTA && ctaBtn) {
    // Insertamos el texto principal ANTES del botón
    footerCTA.insertAdjacentHTML("afterbegin", CTA.text);
    // Actualizamos el texto del botón (sin tocar el href)
    ctaBtn.textContent = CTA.button;
  }

  // Inserta el footer note
  const footerNote = document.getElementById("mgcta-footer-note");
  if (footerNote) {
    footerNote.textContent = FOOTER_NOTE;
  }
});

