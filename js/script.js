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

    infoTextEl.classList.toggle('active');
    if (
      clicked.style.fontWeight === 'bold' &&
      arrow.classList.contains('rotate')
    ) {
      arrow.classList.remove('rotate');
      clicked.style.fontWeight = 'normal';
    } else {
      arrow.classList.add('rotate');
      clicked.style.fontWeight = 'bold';
    }
  })
);
