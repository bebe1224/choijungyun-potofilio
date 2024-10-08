
let currentIndex = 0;
const slideContainer = document.querySelector(".slide-s");
const totalSlides = document.querySelectorAll(".slide-s img").length;
const slideWidth = 481; 


document.querySelector(".prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalSlides - 1; 
  }
  slide();
});


document.querySelector(".next").addEventListener("click", () => {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  slide();
});


function slide() {
  slideContainer.style.transform = `translateX(-${
    currentIndex * slideWidth
  }px)`;
}
