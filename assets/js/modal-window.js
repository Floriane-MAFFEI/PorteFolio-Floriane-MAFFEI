document.addEventListener("DOMContentLoaded", function () {
  // Je sélectionne les boutons "En savoir +"
  var enSavoirPlusBtns = document.querySelectorAll(".en-savoir-plus-btn");

  // Je parcours les boutons "En savoir +"
  enSavoirPlusBtns.forEach(function (enSavoirPlusBtn, index) {
    // et leur ajoute un gestionnaire d'événement au clic sur "En savoir +"
    enSavoirPlusBtn.addEventListener("click", function (event) {
      // J'mpêche le comportement par défaut du lien
      event.preventDefault();

      // Je génère un ID unique pour chaque modale
      var modalId = "test" + (index + 1);

      // Je sélectionne la fenêtre modale
      var modal = document.getElementById(modalId);

      // Puis je rend la fenêtre modale visible
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
      modal.style.transform = "translateY(110%)";
      modal.style.zIndex = "1";
      modal.style.height = "100vh";

      // Enfin je sélectionne l'élément à l'intérieur de la modale sur lequel le focus doit être mis
      var modalContent = modal.querySelector(".modal_content");

      // et je met le focus sur l'élément à l'intérieur de la modale
      modalContent.focus();
    });
  });

  // Je sélectionne tous les boutons close
  var closeModalBtns = document.querySelectorAll(".modal_close");

  // Je parcours les boutons close
  closeModalBtns.forEach(function (closeModalBtn) {
    // Aet leur ajoute un gestionnaire d'événement pour le clic
    closeModalBtn.addEventListener("click", function (event) {
      // J'empêche le comportement par défaut du lien
      event.preventDefault();

      // Je sélectionne la fenêtre modale
      var modal = closeModalBtn.closest(".modal");

      // Puis cache la fenêtre modale
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
      modal.style.transform = "translateY(0)";
      modal.style.zIndex = "-1";
      modal.style.height = "0";
    });
  });
});
