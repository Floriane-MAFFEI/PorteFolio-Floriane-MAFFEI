// Attente que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner tous les liens dans les éléments li de la navigation qui ne sont pas les seuls enfants de leur parent
  const navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");

  // Sélectionner tous les éléments avec la classe 'nav-dropdown'
  const navDropdowns = document.querySelectorAll(".nav-dropdown");

  // Sélectionner l'élément HTML
  const htmlElement = document.querySelector("html");

  // Sélectionner l'élément avec l'ID 'nav-toggle'
  const navToggle = document.getElementById("nav-toggle");

  // Pour chaque lien dans la navigation
  navLinks.forEach(function (link) {
    // J'ajoute un écouteur d'événements au clic sur chaque lien
    link.addEventListener("click", function (e) {
      // et sélectionne le frère arrivant tout de suite après le lien actuel
      const siblingDropdown = this.nextElementSibling;

      // On alterne la visibilité du frère suivant entre 'block' et 'none'
      siblingDropdown.style.display =
        siblingDropdown.style.display === "block" ? "none" : "block";

      // Je cache tous les autres éléments avec la classe 'nav-dropdown'
      navDropdowns.forEach(function (dropdown) {
        if (dropdown !== siblingDropdown) {
          dropdown.style.display = "none";
        }
      });

      // Empêche la propagation de l'événement pour éviter les interférences
      e.stopPropagation();
    });
  });

  // J'ajoute un écouteur d'événements au clic sur l'élément avec l'ID 'nav-toggle'
  navToggle.addEventListener("click", function () {
    // Puis on sélectionne l'élément 'ul' dans la navigation en alternant sa visibilité entre 'block' et 'none'
    const navUl = document.querySelector("nav ul");
    navUl.style.display = navUl.style.display === "block" ? "none" : "block";

    // J'ajoute ou supprime la classe 'active' pour changer l'apparence du bouton de bascule
    navToggle.classList.toggle("active");
  });
});
