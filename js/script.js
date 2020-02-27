var link = document.querySelector(".write-us");

var popup = document.querySelector(".modal-fade");
var close = popup.querySelector(".modal-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

function background(value) {
  var color = document.body.style.backgroundColor;
  switch (value) {
    case 1:
      color = "#849d8f";
      break;
    case 2:
      color = "#8a97a7";
      break;
    case 3:
      color = "#9d8b84";
      break;
  }
  document.body.style.backgroundColor = color;
}