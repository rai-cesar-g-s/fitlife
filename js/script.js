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
