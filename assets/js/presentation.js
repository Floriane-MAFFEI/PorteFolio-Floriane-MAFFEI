var text = document.getElementById("text");
var splitText =
  "Je suis une développeuse Fullstack mais je suis surtout une Vraie Passionnée...".split(
    " "
  );

text.innerHTML = "";
i = 0;
setInterval(function () {
  AjoutDeLettre();
}, 200);

function AjoutDeLettre() {
  if (i < splitText.length) {
    if (
      i > 0 &&
      splitText[i].toLowerCase() === "fullstack" &&
      splitText[i - 1].toLowerCase() === "développeuse" &&
      splitText[i - 2].toLowerCase() === "une"
    ) {
      text.innerHTML = text.innerHTML.replace(/une\sdéveloppeuse/, "");
      text.innerHTML +=
        ' <span style="font-weight: bold">' +
        splitText[i - 2] +
        " " +
        splitText[i - 1] +
        " " +
        splitText[i] +
        "</span>";
    } else {
      text.innerHTML += splitText[i];
    }

    if (i < splitText.length - 1) {
      text.innerHTML += " ";
    }
    i++;
  }
}
