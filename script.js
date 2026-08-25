const listaVersos = [
  "\"Y de blanco te esperé en el altar.\"",
  "\"Tú eres lo que siempre yo soñé.\"",
  "\"My love, my one and only love.\"",
  "\"No hay ninguna razón para no amarte como te amo.\""
  "\"Tú y yo en cada eternidad..💕\"
];

const mensajeFinal = "Gracias por ser mi lugar favorito en el mundo. Te amo con todo mi corazón. 💓(Ya puedes cerrar esta pestaña)";

let indiceVerso = 0;
let intervaloCorazones;
let cartaAbierta = false;

document.addEventListener("DOMContentLoaded", () => {
  const carta = document.getElementById('carta-overlay');
  const btnContinuar = document.getElementById('btn-continuar');
  const elementoTexto = document.getElementById('texto-verso');

  // Colocar el primer verso
  if (elementoTexto && listaVersos.length > 0) {
    elementoTexto.innerText = listaVersos[0];
  }

  // Función para abrir la carta desde cualquier lugar
  function abrirDesdeCualquierLugar(evento) {
    // Si la carta ya se abrió, no hacer nada más aquí
    if (cartaAbierta) return;

    // Quitar la pantalla inicial por completo
    if (carta) {
      carta.style.setProperty('display', 'none', 'important');
    }

    // Iniciar los corazones de fondo
    if (!intervaloCorazones) {
      intervaloCorazones = setInterval(crearCorazon, 350);
    }

    cartaAbierta = true;
  }

  // Escuchar el clic en CUALQUIER LUGAR de la ventana
  window.addEventListener('click', abrirDesdeCualquierLugar);
  window.addEventListener('touchstart', abrirDesdeCualquierLugar);

  // Evento para el botón continuar (evitando que choque con el clic de abrir)
  if (btnContinuar) {
    btnContinuar.addEventListener('click', (e) => {
      // Evitamos que el clic del botón vuelva a disparar eventos raros
      e.stopPropagation();

      // Si aún no se había abierto la carta por alguna razón, la abre
      if (!cartaAbierta) {
        abrirDesdeCualquierLugar();
        return;
      }

      indiceVerso++;

      if (indiceVerso < listaVersos.length) {
        elementoTexto.innerText = listaVersos[indiceVerso];
      } else if (indiceVerso === listaVersos.length) {
        elementoTexto.innerText = mensajeFinal;
        btnContinuar.innerText = "Cerrar. 💖";
      } else {
        btnContinuar.disabled = true;
        btnContinuar.style.opacity = "0.5";
        btnContinuar.innerText = "¡Te amo! 💕";
      }
    });
  }
});

function crearCorazon() {
  const fondo = document.getElementById('fondo-corazones');
  if (!fondo) return;

  const corazon = document.createElement('div');
  corazon.classList.add('corazon-flotante');
  
  const iconos = ['💗', '💞', '💖', '💕', '💘'];
  corazon.innerText = iconos[Math.floor(Math.random() * iconos.length)];
  
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.fontSize = (Math.random() * 18 + 14) + 'px';
  corazon.style.animationDuration = (Math.random() * 3 + 3) + 's';
  
  fondo.appendChild(corazon);
  
  setTimeout(() => {
    corazon.remove();
  }, 6000);
}
