const carrusel = document.querySelector('.carrusel');
// IMPORTANTE: Ahora seleccionamos los enlaces <a>, que son los hijos directos
const items = document.querySelectorAll('.carrusel a');

const width = 1200; // El ancho fijo
let index = 0;

// 1. Clonamos el primer ENLACE completo (con su imagen dentro) y lo ponemos al final
const firstClone = items[0].cloneNode(true);
carrusel.appendChild(firstClone);

// 2. Función de movimiento automático
const startCarousel = () => {
  index++;
  
  carrusel.style.transition = "transform 0.5s ease-in-out";
  carrusel.style.transform = `translateX(${-width * index}px)`;

  // 3. El truco del infinito al terminar la animación
  carrusel.addEventListener('transitionend', () => {
    if (index >= items.length) {
      carrusel.style.transition = "none"; // Quita animación para el salto invisible
      index = 0;
      carrusel.style.transform = `translateX(0px)`;
    }
  });
};

// 4. Se mueve solo cada 3 segundos
setInterval(startCarousel, 4000);