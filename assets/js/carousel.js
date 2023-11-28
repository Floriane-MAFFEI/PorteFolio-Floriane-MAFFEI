// Fonction générique pour initialiser un carrousel
function setupCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const items = carousel.querySelectorAll(".carousel-item");
  let currentSlide = 0;

  function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
      currentSlide = items.length - 1;
    } else if (currentSlide >= items.length) {
      currentSlide = 0;
    }

    displaySlide();
  }

  function displaySlide() {
    items.forEach((item, index) => {
      if (index === currentSlide) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    const transformValue = -currentSlide * 100 + "%";
    carousel.querySelector(".carousel-inner").style.transform =
      "translateX(" + transformValue + ")";
  }

  // Ajoutez les gestionnaires d'événements pour les boutons de contrôle
  const prevButton = carousel.querySelector(".carousel-control-prev");
  const nextButton = carousel.querySelector(".carousel-control-next");

  prevButton.addEventListener("click", () => changeSlide(-1));
  nextButton.addEventListener("click", () => changeSlide(1));

  displaySlide();

  return {
    changeSlide,
  };
}

// Initialisez les carrousels
const adopteUnArbreCarousel = setupCarousel("myCarousel");
const showFlixCarousel = setupCarousel("myCarousel-ShowFlix");
