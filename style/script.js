// const $next = document.querySelector(".next");
// const $prev = document.querySelector(".prev");

// $next.addEventListener("click", () => {
//   const items = document.querySelectorAll(".item");
//   document.querySelector(".slide").appendChild(items[0]);
// });

// $prev.addEventListener("click", () => {
//   const items = document.querySelectorAll(".item");
//   document.querySelector(".slide").prepend(items[items.length - 1]);
// });

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//    ----- DESTINATION   -----

// const images = [
//   "bromo1a.jpg",
//   "awan.jpg",
//   "tepiPantai.jpg",
//   "gunungLaut.jpg",
//   "sunset.jpg",
//   "gunungLaut.jpg",
// ];
// let currentIndex = 0;
// let thumbnailIndex = 0;

// function MainSlide(index) {
//   currentIndex = index;
//   document.getElementById("mainSlide").src = images[currentIndex];
//  updateActiveThumbnail();
// }

//   function updateActiveThumbnail() {
//     const thumbnail_container = document.querySelectorAll("thumbnail");

//   thumbnail_container.forEach((thumbnail, i) => {
//     thumbnail.classList.toggle("active", i === currentIndex);
//   });
// }

// function next() {
//   if (thumbnailIndex < images.length - 1) {
//     thumbnailIndex ++;
//     thumbnails.scrollBy(90, 0);
//   }
//   setMainImage(thumbnailIndex);
// }

// function prev() {
//   const thumbnails = document.querySelector(".thumbnail-container");
//   if (thumbnailIndex > 0) {
//     thumbnailIndex --;
//     thumbnails.scrollBy(-90, 0);
//   }
//   setMainSlide(thumbnailIndex);
// }

// window.onload = function() {
//   setMainSlide(0);
// };





//auuuuuuuuuuuuuuuu



let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

let currentIndex = 0;

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(item[0])
});

prev.addEventListener('click', function(){
  let item = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(item[item.length - 1])
});


function updateMainImage(index) {
  slide.style.backgroundImage = `url(${item[index].src})`;
  currentIndex = index;
  updateNav_button();
}

function updateNav_button() {
  prev.disabled = currentIndex === 0;
  next.disabled = currentIndex === thumbnail_container.length - 1 ;
}

item.forEach((item, index) => {
  item.addEventListener("click", () => updateMainImage(index));
});





