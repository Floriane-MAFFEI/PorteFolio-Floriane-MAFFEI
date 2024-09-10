// Ajoutez ce script après avoir inclus jQuery
$(document).ready(function () {
  $(".carousel-item img").on("mouseenter", function () {
    var $img = $(this);
    var imgWidth = $img.width();
    var imgHeight = $img.height();

    $img.on("mousemove", function (e) {
      var rect = e.currentTarget.getBoundingClientRect();
      var mouseX = e.clientX - rect.left;
      var mouseY = e.clientY - rect.top;

      var percentX = (mouseX / imgWidth) * 100;
      var percentY = (mouseY / imgHeight) * 100;

      // Ajuster la valeur de l'échelle en fonction de l'effet souhaité
      var scaleValue = 2; // Vous pouvez ajuster cette valeur selon votre préférence

      // Calculer les décalages pour rester dans le cadre
      var translateX = Math.min(
        0,
        Math.max(-(imgWidth * (scaleValue - 1)), -(percentX * (scaleValue - 1)))
      );
      var translateY = Math.min(
        0,
        Math.max(
          -(imgHeight * (scaleValue - 1)),
          -(percentY * (scaleValue - 1))
        )
      );

      var transformValue =
        "scale(" +
        scaleValue +
        ") translate(" +
        translateX +
        "%, " +
        translateY +
        "%)";
      $img.css("transform", transformValue);
    });
  });

  $(".carousel-item img").on("mouseleave", function () {
    $(this).off("mousemove").css("transform", "scale(1) translate(0, 0)");
  });
});
