'use strict';

const accordion = document.querySelectorAll('.accordion-btn');
const accQuestion = document.querySelectorAll('accordion-question');
const arrowIcon = document.querySelectorAll('.icon-arrow');
const infoEl = document.querySelectorAll('.info-text');

accordion.forEach(btn =>
  btn.addEventListener('click', e => {
    const clicked = e.target.closest('.accordion-btn');
    const infoTextEl = clicked.parentElement.nextElementSibling.children[0];
    const arrow = clicked.nextElementSibling;

    if (!clicked) return;

    infoEl.forEach(e => e.classList.remove('active'));
    arrowIcon.forEach(e => e.classList.remove('rotate'));

    infoTextEl.classList.add('active');
    arrow.classList.add('rotate');
  })
);
