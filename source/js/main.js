/* eslint-disable new-cap, no-undef */
'use strict';
var body = document.querySelector('body');
var modalContacts = document.querySelector('.modal.contacts');
var contactsToggle = document.querySelector('.header__btn');
var modalCloseBtn = document.querySelector('.modal__close-btn');
var overlay = document.querySelector('.overlay');
var nameField = document.querySelector('.modal [type="text"]');
var accordions = document.querySelectorAll('.column__accordion');
var accordionsBtn = document.querySelectorAll('.footer__btn');
var accordionsList = document.querySelectorAll('.footer__list');
var contacts = document.querySelector('#contacts');
var bannerBtn = document.querySelector('.banner__btn');
var advantages = document.querySelector('#advantages');
var bannerScroll = document.querySelector('.banner__scroll');
var contactsForm = document.querySelector('#contacts .form');
var contactsFormModal = document.querySelector('.modal .form');
var nameInput = document.querySelector('#name');
var nameInputModal = document.querySelector('#name-modal');
var phoneInput = document.querySelector('#phone');
var phoneInputModal = document.querySelector('#phone-modal');
var messageInput = document.querySelector('#message');
var messageInputModal = document.querySelector('#message-modal');

// Когда модальное окно закрыто
if (contactsToggle) {
  contactsToggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.remove('modal--close');
      overlay.classList.remove('overlay--close');
      body.classList.add('overflow');
      nameField.focus();
    }
  });
}

// Когда модальное окно открыто
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', function () {
    if (!modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Закрытие клавишей ESC
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (!modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  }
});

// Закрытие overlay
if (overlay) {
  overlay.addEventListener('click', function () {
    if (!modalContacts.classList.contains('modal--close')) {
      modalContacts.classList.add('modal--close');
      overlay.classList.add('overlay--close');
      body.classList.remove('overflow');
    }
  });
}

// Открывает и закрывает Аккордеон
accordions.forEach(function (accordion) {
  var btn = accordion.querySelector('.footer__btn');
  var list = accordion.querySelector('.footer__list');

  btn.addEventListener('click', function () {
    if (btn.classList.contains('footer__btn--opened')) {
      btn.classList.remove('footer__btn--opened');
    } else {
      accordionsBtn.forEach(function (accordionBtn) {
        accordionBtn.classList.remove('footer__btn--opened');
      });
      btn.classList.add('footer__btn--opened');
    }
    if (list.classList.contains('footer__list--opened')) {
      list.classList.remove('footer__list--opened');
    } else {
      accordionsList.forEach(function (accordionList) {
        accordionList.classList.remove('footer__list--opened');
      });
      list.classList.add('footer__list--opened');
    }
  });
});

// Скрол
if (bannerBtn) {
  bannerBtn.addEventListener('click', function () {
    window.scrollBy({top: (contacts.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

if (bannerScroll) {
  bannerScroll.addEventListener('click', function () {
    window.scrollBy({top: (advantages.offsetTop - window.scrollY), behavior: 'smooth'});
  });
}

// Валидация для телефона
IMask(document.querySelector('#phone'), {mask: '+{7}(000)000-00-00'});
IMask(document.querySelector('#phone-modal'), {mask: '+{7}(000)000-00-00'});

// Хранение данных в localStorage
if (contactsForm) {
  contactsForm.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-field', nameInput.value);
    localStorage.setItem('phone-field', phoneInput.value);
    localStorage.setItem('message-field', messageInput.value);
  });
}

if (contactsFormModal) {
  contactsFormModal.addEventListener('submit', function (event) {
    event.preventDefault();

    localStorage.setItem('name-modal', nameInputModal.value);
    localStorage.setItem('phone-modal', phoneInputModal.value);
    localStorage.setItem('message-modal', messageInputModal.value);
  });
}
