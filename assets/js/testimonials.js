// Ajoutez ces lignes au début de votre fichier JS pour stocker l'ID de l'intervalle
let intervalId;

// Sélection des différents éléments
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = testimonialsContainer.querySelector(".testimonial");
const logo = testimonialsContainer.querySelector(".logo");
const username = testimonialsContainer.querySelector(".username");
const role = testimonialsContainer.querySelector(".role");

// Contient les témoignages
const testimonials = [
  {
    name: "",
    position: "O'clock",
    photo: "./assets/img/testimonials/o'clock.jpg",
    text: "Tu as contribué au développement du backoffice, en travaillant sur des composants de sécurité, l'architecture, les fixtures et les formulaires. Ton code est propre et structuré, ton travail témoigne d'une bonne maîtrise des concepts. Tu es sur la bonne voie pour devenir une développeuse de talent",
  },
  {
    name: "",
    position: "O'clock",
    photo: "./assets/img/testimonials/o'clock.jpg",
    text: "Implication remarquable dans le projet, tu as pris en charge des tâches importante et tu as su les mener à bien. Tu es sérieuse, engager et proactive lorsque l'on te confie un projet. Ton travail est précieux et apprécié au sein de l'équipe.",
  },
  {
    name: "",
    position: "O'clock",
    photo: "./assets/img/testimonials/o'clock.jpg",
    text: "Tu sais très bien travaillé en équipe, tu participes de manière active et enthousiaste",
  },
  {
    name: "",
    position: "O'clock",
    photo: "./assets/img/testimonials/o'clock.jpg",
    text: "Tu as un bel avenir dans le domaine du développement web. Tes bases solide te permettent d'envisager un poste avec confiance. Ton engagement et ta détermination sont des atouts majeurs, tu as une progression technique remarquable.",
  },
];

// Initialisation de l'index sur le témoignage actuel
let index = 1;

// Fonction de mise à jour du témoignage dans le DOM
function updateTestimonial() {
  // Récupération des propriétés du témoignage actuel
  let { name, position, photo, text } = testimonials[index];

  // Mise à jour des éléments HTML avec les propriétés extraites
  testimonial.innerHTML = text;
  logo.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  // On incrémente l'indice pour passer au témoignage suivant
  index++;

  // Si l'indice dépasse la longueur du tableau,
  // remise à zéro pour créer une boucle
  // et redémarrer au premier témoignage
  if (index > testimonials.length - 1) {
    index = 0;
  }
}

// Appelle de la fonction toutes les 10 secondes
intervalId = setInterval(updateTestimonial, 15000);

// Ajoutez ces fonctions pour changer de témoignage en utilisant les flèches
function changeTestimonial(direction) {
  // Arrêtez l'intervalle avant de changer de témoignage
  clearInterval(intervalId);

  // Mettez à jour l'indice en fonction de la direction (1 pour suivant, -1 pour précédent)
  index += direction;

  // Si l'indice dépasse la longueur du tableau, remise à zéro pour créer une boucle
  // et redémarrer au premier témoignage
  if (index >= testimonials.length) {
    index = 0;
  } else if (index < 0) {
    index = testimonials.length - 1;
  }

  // Mise à jour du témoignage dans le DOM
  updateTestimonial();

  // Réinitialisez la barre de progression
  resetProgressBar();

  // Redémarrez l'intervalle après le changement de témoignage
  intervalId = setInterval(updateTestimonial, 15000);
}

// Fonction pour réinitialiser la barre de progression
function resetProgressBar() {
  const progressBar = testimonialsContainer.querySelector(".progress-bar");
  progressBar.style.animation = "none"; // Supprime l'animation actuelle
  void progressBar.offsetWidth; // Forcez une réinitialisation du style (retrigger reflow)
  progressBar.style.animation = "grow 10s linear infinite"; // Réapplique l'animation
}

// Ajoutez un gestionnaire d'événements pour arrêter l'intervalle lorsqu'on clique sur les flèches
document.querySelector(".arrow-right").addEventListener("click", function () {
  stopInterval();
  changeTestimonial(1);
});
