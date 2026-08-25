// Lista de tus versos / mensajes
const listaVersos = [
  "\"Y de blanco te esperé en el altar.\"",
  "\"Tú eres lo que siempre yo soñé.\"",
  "\"My love, my one and only love.\"",
  "\"No hay ninguna razón para no amarte como te amo.\""
  "\"Tú y yo en cada eternidad..💕\"
];

// Mensaje final que aparecerá al terminar todos los versos
const mensajeFinal = "Gracias por ser mi lugar favorito en el mundo. Te amo con todo mi corazón.💕 (Ya puedes cerrar esta pestaña)";

let indiceVerso = 0;
let intervaloCorazones;

// Cargar el primer verso al iniciar
document.addEventListener("DOMContentLoaded", () => {
  const elementoTexto = document.getElementById('texto-verso');
  if (elementoTexto) {
    elementoTexto.innerText = listaVersos[indiceVerso];
//Asegura que al dar click en la carta se abra
const carta = document.getElementById('carta-overlay');
if (carta){
  carta.addEventListener('click', abrirCarta);
  }
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

function abrirCarta() {
  const carta = document.getElementById('carta-overlay');
  
  // Ocultar carta directo al dar tap
  carta.style.display = 'none';

  // Iniciar la lluvia de corazones de fondo
  intervaloCorazones = setInterval(crearCorazon, 350);
}

// Lógica para avanzar en los versos y mostrar el mensaje final
function siguienteVerso() {
  const elementoTexto = document.getElementById('texto-verso');
  const boton = document.getElementById('btn-continuar');

  indiceVerso++;

  // Si todavía quedan versos en la lista
  if (indiceVerso < listaVersos.length) {
    elementoTexto.innerText = listaVersos[indiceVerso];
  } 
  // Cuando se acaban los versos, muestra el mensaje final
  else if (indiceVerso === listaVersos.length) {
    elementoTexto.innerText = mensajeFinal;
    boton.innerText = "Cerrar 💖";
  } 
  // Si da clic al botón "Cerrar", intenta cerrar la pestaña o desactiva el botón
  else {
    boton.disabled = true;
    boton.style.opacity = "0.5";
    boton.innerText = "Ya puedes cerrar esta pestañita, espero que te haya gustado.💕";
    window.close(); // Intenta cerrar la pestaña en navegadores que lo permitan
  }
}
