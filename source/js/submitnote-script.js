'use strict';

var popup = document.querySelector('.popup__form');
var popupSuccess = document.querySelector('.popup__form--success');
var popupFail = document.querySelector('.popup__form--fail');
var closerBtn = document.querySelector('.popup__btn');
var form = document.querySelector('.feedback__form');

// открытие попапа
var openMessage = function(popupBlock) {
  popupBlock.classList.add('popup__form--shown');
};
// закрытие попапа
var closeMessage = function(popup) {
  popup.classList.remove('popup__form--shown');
};

// хэндлеры
var onError = function() {
  event.preventDefault();
  openMessage(popupFail);
  document.removeEventListener('submit', onError);
};

var onSubmit = function() {
  event.preventDefault();
  openMessage(popupSuccess);
  document.removeEventListener('submit', onSubmit);
  form.reset();
};

var onClick = function() {
  event.preventDefault();
  closeMessage(popup);
  document.removeEventListener('click', onClick)
}

////////////////////////////////////////////////////////////
document.addEventListener('submit', onSubmit, onError);
closerBtn.addEventListener('click', onClick);
