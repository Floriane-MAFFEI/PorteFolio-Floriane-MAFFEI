// Récupérez le carousel et les éléments associés
const carousel = document.getElementById("myCarousel");
const items = carousel.querySelectorAll(".carousel-item");

let currentSlide = 0;

// Fonction pour changer de diapositive
function changeSlide(direction) {
  currentSlide += direction;

  // Vérifiez les limites des diapositives
  if (currentSlide < 0) {
    currentSlide = items.length - 1;
  } else if (currentSlide >= items.length) {
    currentSlide = 0;
  }

  // Affichez la diapositive actuelle
  displaySlide();
}

// Fonction pour afficher la diapositive actuelle
function displaySlide() {
  items.forEach((item, index) => {
    if (index === currentSlide) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Déplacez le carousel pour afficher la diapositive actuelle
  const transformValue = -currentSlide * 100 + "%";
  carousel.querySelector(".carousel-inner").style.transform =
    "translateX(" + transformValue + ")";
}

// Affichez la première diapositive au chargement
displaySlide();
