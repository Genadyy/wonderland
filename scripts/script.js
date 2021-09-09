const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
burger.onclick = function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
};
$(".about-slider").slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow:
    '<div class="slick-prev"><img src="./img/slider/arrow-left.png"/></div>',
  nextArrow:
    '<div class="slick-next"><img src="./img/slider/arrow-right.png"/></div>',
  accessibility: true,
});
function initMap() {
  var address = { lat: 50.4521327, lng: 30.5161878 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: address,
  });
  var marker = new google.maps.Marker({ position: address, map: map });
}

const sum = (a, b) => {
  return a+b;
}
console.log(sum(5, 7));