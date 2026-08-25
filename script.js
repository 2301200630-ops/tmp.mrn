const listaVersos = [
"\"Y de blanco te esperé en el altar.\"",
  "\"Tú eres lo que siempre yo soñé.\"",
  "\"My love, my one and only love.\"",
  "\"No hay ninguna razón para no amarte como te amo.\""
  "\"Tú y yo en cada eternidad..💕\"
];

const mensajeFinal = "Gracias por ser mi lugar favorito en el mundo. Te amo. 💕(Ya puedes cerrar esta pestaña)";

let indiceVerso = 0;
let intervaloCorazones = null;
let cartaAbierta = false;

document.addEventListener("DOMContentLoaded", () => {
  const cajaPrincipal = document.querySelector('.caja-principal');
  const vistaCarta = document.getElementById('vista-carta');
  const vistaVersos = document.getElementById('vista-versos');
  const btnContinuar = document.getElementById('btn-continuar');
  const elementoTexto = document.getElementById('texto-verso');

  // Inicializar texto del primer verso
  if (elementoTexto && listaVersos.length > 0) {
    elementoTexto.innerText = listaVersos[0];
  }

  // Función para abrir la carta
  function abrirCarta() {
    if (cartaAbierta) return;
    cartaAbierta = true;

    // Cambiar pantallas
    vistaCarta.classList.add('oculto');
    vistaVersos.classList.remove('oculto');

    // Iniciar lluvia de corazones
    if (!intervaloCorazones) {
      intervaloCorazones = setInterval(crearCorazon, 350);
    }
  }

  // Hacer clic en la caja abre la carta
  cajaPrincipal.addEventListener('click', (e) => {
    if (!cartaAbierta) {
      abrirCarta();
    }
  });

  // Botón Continuar
  btnContinuar.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita interferencias de clics

    indiceVerso++;

    if (indiceVerso < listaVersos.length) {
      elementoTexto.innerText = listaVersos[indiceVerso];
    } else if (indiceVerso === listaVersos.length) {
      elementoTexto.innerText = mensajeFinal;
      btnContinuar.innerText = "Cerrar 💖";
    } else {
      btnContinuar.disabled = true;
      btnContinuar.style.opacity = "0.5";
      btnContinuar.innerText = "Te amo. 🫶🏼";
    }
  });
});

function crearCorazon() {
  const fondo = document.getElementById('fondo-corazones');
  if (!fondo) return;

  const corazon = document.createElement('div');
  corazon.classList.add('corazon-flotante');
  
  const iconos = ['💞', '💘', '💖', '💗', '💕'];
  corazon.innerText = iconos[Math.floor(Math.random() * iconos.length)];
  
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.fontSize = (Math.random() * 18 + 14) + 'px';
  corazon.style.animationDuration = (Math.random() * 3 + 3) + 's';
  
  fondo.appendChild(corazon);
  
  setTimeout(() => {
    corazon.remove();
  }, 6000);
}
