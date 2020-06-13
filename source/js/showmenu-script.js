'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var burger = document.querySelector(".main-nav__btn--open");
var popup = document.querySelector(".main-nav__list");
var header = document.querySelector(".page-header");
var cross = popup.querySelector(".main-nav__btn--close");

// функнкции, показывающие меню и убирающие бургер
var showPopup = function () {
  popup.classList.add("popup--show");
};

var showHeader = function () {
  header.classList.add("page-header--showed-menu");
};

var removeBurger = function () {
  burger.classList.add("visually-hidden");
};

// функнкции, убирающие меню и показывающие бургер
var removePopup = function () {
  popup.classList.remove("popup--show");
};

var removeHeader = function () {
  header.classList.remove("page-header--showed-menu");
};

var addBurger = function () {
  burger.classList.remove("visually-hidden");
};

////////////////////////
var onClickOpener = function () {
  event.preventDefault();
  showPopup();
  showHeader();
  removeBurger();
  // burger.removeEventListener('click', onClickOpener)
};

var onBurgerEnterOpener = function () {
  event.preventDefault();
  showPopup();
  showHeader();
  removeBurger();
  // burger.removeEventListener('keydown', onBurgerEnterOpener);
}

var onClickCloser = function () {
  event.preventDefault();
  removePopup();
  removeHeader();
  addBurger();
  // cross.removeEventListener("click", onClickCloser);
}
var onEscCloser = function () {
  if (event.keyCode === ESC_KEYCODE) {
    event.preventDefault();
    removePopup();
    removeHeader();
    addBurger();
    window.removeEventListener('keydown', onEscCloser);
  }
}

// обрабатываем открытие диалогового окна по клику на бургер
burger.addEventListener("click", onClickOpener);
// обрабатываем открытие диалогового окна по Enter на бургер
burger.addEventListener('keydown', onBurgerEnterOpener);
// обрабатываем закрытие диалогового окна по клику на cross
cross.addEventListener("click", onClickCloser);
// обрабатываем закрытие диалогового окна по Esc
document.addEventListener('keydown', onEscCloser);
