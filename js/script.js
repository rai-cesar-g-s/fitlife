'use strict';

/*
 add event on element
*/

const addEventOnElem = function (elem, type, callback) {
    if (elem, length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }
    else {
        elem.addEventListener(type, callback);
    }
}

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active");}

addEventListener(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active");}

addEventListener(navLinks, "click", closeNavbar);


