'use strict';

var link = document.querySelector(".main-nav__btn--open");
var popup = document.querySelector(".main-nav__list");
var header = document.querySelector(".page-header");
var closer = popup.querySelector(".main-nav__btn--close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup--show");
  header.classList.add("page-header--showed-menu");
  link.classList.add("visually-hidden");

});
closer.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup--show");
  header.classList.remove("page-header--showed-menu");
  link.classList.remove("visually-hidden");
});
