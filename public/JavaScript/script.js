// Header Auto Show and Hide
var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  var header = document.querySelector("header");

  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
    header.classList.add("is-active");
  } else {
    header.style.top = "-150px";
    header.classList.remove("is-active");
  }

  if (currentScrollPos == 0) { header.classList.remove("is-active"); }
  prevScrollpos = currentScrollPos;
}
//#endregion Header & Nav