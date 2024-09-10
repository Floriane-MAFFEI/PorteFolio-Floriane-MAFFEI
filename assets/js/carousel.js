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

  prevButton.addEventListener("click", function (event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    changeSlide(-1);
  });

  nextButton.addEventListener("click", function (event) {
    // Empêcher le comportement par défaut du lien
    event.preventDefault();
    changeSlide(1);
  });

  displaySlide();

  return {
    changeSlide,
  };
}

// Initialisez les carrousels
const adopteUnArbreCarousel = setupCarousel("myCarousel");
const showFlixCarousel = setupCarousel("myCarousel-ShowFlix");
const myMediaCollectionCarousel = setupCarousel("myCarousel-MyMediaCollection");
const brosseAdamCarousel = setupCarousel("myCarousel-BrosseAdam");

document.addEventListener("DOMContentLoaded", function () {
  const closeModalButtons = document.querySelectorAll(".modal_close");

  closeModalButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Empêcher le comportement par défaut du lien
      event.preventDefault();

      // Fermer la modal
      const modal = button.closest(".modal");
      modal.style.display = "none";

      // Réinitialiser la modal
      resetModal(modal);

      // Retourner à l'ancre "portefolio"
      window.location.href = "./index.html#portefolio";
    });
  });

  // Réinitialise la modal en la rendant à nouveau visible
  function resetModal(modal) {
    modal.style.display = "block";
  }
});
