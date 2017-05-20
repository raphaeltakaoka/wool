
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
$(window).scroll(function(){
  $("#div").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
});
