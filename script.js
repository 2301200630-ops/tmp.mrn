// Lista de tus versos / canciones
const listaVersos = [
  "\"Y de blanco te esperé en el altar.\"",
  "\"Tú eres lo que siempre yo soñé.\"",
  "\"My love, my one and only love.\"",
  "\"No hay ninguna razón para no amarte como te amo.\""
  "\"Tú y yo en cada eternidad..💕\"
];

// Mensaje final que aparecerá al terminar todos los versos
const mensajeFinal = "Gracias por ser mi lugar favorito en el mundo. Te amo con todo mi corazón. 💕 (Ya puedes cerrar esta pestaña)";

let indiceVerso = 0;
let intervaloCorazones;

// Cargar el primer verso al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  const elementoTexto = document.getElementById('texto-verso');
  if (elementoTexto) {
    elementoTexto.innerText = listaVersos[indiceVerso];
  }
});

// Generar corazones flotantes al fondo
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

// Abrir carta al dar tap
function abrirCarta() {
  const carta = document.getElementById('carta-overlay');
  
  // Ocultar carta al instante
  carta.style.display = 'none';

  // Iniciar la lluvia de corazones
  intervaloCorazones = setInterval(crearCorazon, 350);
}

// Cambiar versos y mostrar mensaje final
function siguienteVerso() {
  const elementoTexto = document.getElementById('texto-verso');
  const boton = document.getElementById('btn-continuar');

  indiceVerso++;

  if (indiceVerso < listaVersos.length) {
    elementoTexto.innerText = listaVersos[indiceVerso];
  } 
  else if (indiceVerso === listaVersos.length) {
    elementoTexto.innerText = mensajeFinal;
    boton.innerText = "Cerrar. 💖";
  } 
  else {
    boton.disabled = true;
    boton.style.opacity = "0.5";
    boton.innerText = "¡Te amo! 💘";
    window.close();
  }
}
