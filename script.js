let intervaloCorazones;

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
  
  // Ocultar carta al instante
  carta.style.display = 'none';

  // Iniciar la lluvia de corazones de fondo
  intervaloCorazones = setInterval(crearCorazon, 350);
}
