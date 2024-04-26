/* Este script permite crear las funciones del carrusel*/

const carousel = document.querySelector('.carousel');
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');

let currentSlide = 0;
const slideCount = carousel.querySelectorAll('img').length;

// Función para crear indicadores de forma dinámica
function addIndicators() {
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  for (let i = 0; i < slideCount; i++) {
    const indicator = document.createElement('button');
    indicator.classList.add('carousel-indicator');
    if (i === 0) {
      indicator.classList.add('active'); // Indicador inicial activo
    }
    indicator.addEventListener('click', () => {
      currentSlide = i;
      updateSlideIndicator();
      carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
    indicatorsContainer.appendChild(indicator);
  }
}

// Agrega indicadores al carrusel
addIndicators();

// Función para actualizar el indicador de la diapositiva actual
function updateSlideIndicator() {
  const slideIndicators = document.querySelectorAll('.carousel-indicator');
  if (slideIndicators.length > 0) {
    for (let i = 0; i < slideIndicators.length; i++) {
      slideIndicators[i].classList.remove('active');
    }
    slideIndicators[currentSlide].classList.add('active');
  }
}

// Detectores de eventos para botones de navegación
nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide === slideCount) {
    currentSlide = 0;
  }
  updateSlideIndicator();
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slideCount - 1;
  }
  updateSlideIndicator();
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
});

//Actualización incial del indicador
updateSlideIndicator();
