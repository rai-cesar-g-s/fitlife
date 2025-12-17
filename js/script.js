'use strict';

const addEventOnElem = function (elems, type, callback) {
  elems.forEach(elem => elem.addEventListener(type, callback));
}

const navbar = document.querySelector("[data-navbar]");
const navOpenBtns = document.querySelectorAll("[data-nav-open]");
const navCloseBtns = document.querySelectorAll("[data-nav-close]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const openNavbar = () => navbar.classList.add("active");
const closeNavbar = () => navbar.classList.remove("active");

addEventOnElem(navOpenBtns, "click", openNavbar);
addEventOnElem(navCloseBtns, "click", closeNavbar);
addEventOnElem(navLinks, "click", closeNavbar);

// header & back to top btn active

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function (){
  if (window.scrollY >= 100){
    header.classList.add("active");
    backTopBtn.classList.add("active");
  }
  else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});