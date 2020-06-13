'use strict';

var ESC_KEYCODE = 27;
var popups = document.querySelectorAll('.popup__form');
var popupSuccess = document.querySelector('.popup__form--success');
var popupFail = document.querySelector('.popup__form--fail');
var closerBtns = document.querySelectorAll('.popup__btn');
var form = document.querySelector('.feedback__form');
var input = document.querySelector('.feedback__field')

// открытие попапа
var openMessage = function(popupBlock) {
  popupBlock.classList.add('popup__form--shown');
};
// закрытие попапа
var closeMessage = function(popups) {
  popups.forEach(function (popup) {popup.classList.remove('popup__form--shown')});
};

// хэндлеры
var onError = function() {
  event.preventDefault();
  openMessage(popupFail);
  document.removeEventListener('submit', onSubmit);
};

var onSubmit = function() {
  event.preventDefault();
  openMessage(popupSuccess);
  document.removeEventListener('submit', onError);
  form.reset();
};

var onClickCloser = function() {
  event.preventDefault();
  closeMessage(popups);
  document.removeEventListener('click', onClickCloser)
}

var onEscCloser = function () {
  if (event.keyCode === ESC_KEYCODE) {
    closeMessage(popups);
  }
}
////////////////////////////////////////////////////////////
// вывод сообщения об ошибке
input.addEventListener('invalid', onError);
// вывод сообщения об успехе
form.addEventListener('submit', onSubmit);
// закрытие попапа по Click
closerBtns.forEach(function (btn) {btn.addEventListener('click', onClickCloser)});
// закрытие попапа по Esc
document.addEventListener('keydown', onEscCloser);
