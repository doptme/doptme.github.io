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


  const inputQuantity = document.querySelector(".input-quantity")
  const btnIncrement = document.querySelector("#increment")
  const btnDecrement= document.querySelector("#decrement")

  let valueByDefault = parseInt(inputQuantity.value)

  btnIncrement.addEventListener("click",() =>{
    valueByDefault += 1
    inputQuantity.value = valueByDefault
  })

  btnDecrement.addEventListener("click",() =>{
    if(valueByDefault ===1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
  })

  const toggleDescription = document.querySelector(".tittle-description")
  const toggleAditionalInfo = document.querySelector(".tittle-aditional-info")

  const contentDescription = document.querySelector(".text-description")
  const contentAditionalInfo = document.querySelector(".text-aditional-info")

  toggleDescription.addEventListener("click", () =>{
    contentDescription.classList.toggle("hidden");
  })

  toggleAditionalInfo.addEventListener("click", () =>{
    contentAditionalInfo.classList.toggle("hidden");
  })