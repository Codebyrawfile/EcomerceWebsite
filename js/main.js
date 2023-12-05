
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// Slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

//Animations 
ScrollReveal().reveal('.top-nav', {
  origin: 'bottom',
  distance: '20px',
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  delay: 200,
})

ScrollReveal().reveal('.nav', {
  origin: 'bottom',
  distance: '20px',
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  delay: 200,
})

ScrollReveal().reveal('.header', {
  origin: 'bottom',
  distance: '20px',
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  delay: 200,
})

ScrollReveal().reveal('section', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  delay: 200,
})

ScrollReveal().reveal('footer', {
  origin: 'bottom',
  distance: '20px',
  duration: 1000,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  delay: 200,
})

// MOBILE NAV 
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('mobile-nav-hide',);
})