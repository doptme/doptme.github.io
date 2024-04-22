document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.querySelector('.carrusel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
  
    let counter = 0;
    const carruselWidth = carrusel.clientWidth;
  
    nextButton.addEventListener('click', () => {
      counter++;
      carrusel.style.transform = `translateX(-${counter * carruselWidth}px)`;
    });
  
    prevButton.addEventListener('click', () => {
      if (counter > 0) {
        counter--;
        carrusel.style.transform = `translateX(-${counter * carruselWidth}px)`;
      }
    });
  });