'use strict';

const accordion = document.querySelectorAll('.accordion-btn');
const accQuestion = document.querySelectorAll('accordion-question');
const arrowIcon = document.querySelectorAll('.icon-arrow');
const infoEl = document.querySelectorAll('.info-text');

accordion.forEach(btn =>
  btn.addEventListener('click', e => {
    const clicked = e.target.closest('.accordion-btn');

    if (!clicked) return;

    infoEl.forEach(e => e.classList.remove('active'));

    const infoTextEl = clicked.parentElement.nextElementSibling.children[0];

    infoTextEl.classList.add('active');
  })
);
