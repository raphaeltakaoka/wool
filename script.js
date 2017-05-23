
var modal = document.querySelector(".modal");
var opacity = 0;
var width = 50;


function mostrarProduto1() {
  opacity++;

  console.log(opacity);
  modal.style.opacity = opacity;
  if (opacity > 1) {
    opacity = 0;
    modal.style.opacity = opacity;

  }
}
var slides1 = document.querySelectorAll(".image img");
var slideAtivo = 0;

function advanceSlide1() {
  slides1[slideAtivo].classList.remove("active");
  slideAtivo++;
  if (slideAtivo == slides1.length) {
    slideAtivo = 0;
  }
  slides1[slideAtivo].classList.add("active");
}
setInterval(advanceSlide1, 1500);

var slides2 = document.querySelectorAll(".image1 img");
var slideAtivo1 = 0;

function advanceSlide2() {
  slides2[slideAtivo1].classList.remove("active");
  slideAtivo1++;
  if (slideAtivo1 == slides2.length) {
    slideAtivo1 = 0;
  }
  slides2[slideAtivo1].classList.add("active");
}
setInterval(advanceSlide2, 1000);

var slides3 = document.querySelectorAll(".image2 img");
var slideAtivo2 = 0;

function advanceSlide3() {
  slides3[slideAtivo2].classList.remove("active");
  slideAtivo2++;
  if (slideAtivo2 == slides3.length) {
    slideAtivo2 = 0;
  }
  slides3[slideAtivo2].classList.add("active");
}
setInterval(advanceSlide3, 500);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
