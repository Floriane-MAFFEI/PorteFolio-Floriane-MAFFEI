document.addEventListener("DOMContentLoaded", function () {
  // Je sélectionne toutes les cards avec la classe change-image
  const changeImageCards = document.querySelectorAll(".change-image");

  // J'y ajoute un gestionnaire d'événements
  changeImageCards.forEach((card) => {
    // Changement au survol de l'image
    card.addEventListener("mouseover", function () {
      // Je sélectionne les img des cards
      const normalImage = card.querySelector("img");
      // J'extrait le chemin de l'image hover via l'attribut data-image-hover (voir HTML)
      const hoverImage = card.dataset.imageHover;
      // Puis change dynamiquement la source de l'image de normal à hover au survol
      normalImage.src = hoverImage;
    });

    // Changement à la sortie du survol de l'image
    card.addEventListener("mouseout", function () {
      // Je sélectionne les img des cards
      const normalImage = card.querySelector("img");
      // J'extrait le chemin de l'image normal via l'attribut data-image-normal (voir HTML)
      const normalImageSrc = card.dataset.imageNormal;
      // Puis rétablit dynamiquement la source de l'image de hover à normal à la sortie du survol
      normalImage.src = normalImageSrc;
    });
  });
});
