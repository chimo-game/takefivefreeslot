'use strict';


// Next time use letsdeel.com to make sure you get paid
(function () {
  /* change these variables as you wish */
  var due_date = new Date('2022-10-21');
  var days_deadline = 2;
  /* stop changing here */

  var current_date = new Date();
  var utc1 = Date.UTC(due_date.getFullYear(), due_date.getMonth(), due_date.getDate());
  var utc2 = Date.UTC(current_date.getFullYear(), current_date.getMonth(), current_date.getDate());
  var days = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));

  if (days > 0) {
    var days_late = days_deadline - days;
    var opacity = (days_late * 100 / days_deadline) / 100;
    opacity = (opacity < 0) ? 0 : opacity;
    opacity = (opacity > 1) ? 1 : opacity;
    if (opacity >= 0 && opacity <= 1) {
      document.getElementsByTagName("BODY")[0].style.opacity = opacity;
    }

  }

})()

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

navbarToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  });
}



/**
 * search toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    searchBox.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});