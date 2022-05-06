'use strict';

const accordion = document.querySelectorAll('.accordion-btn');
const accQuestion = document.querySelectorAll('accordion-question');
const arrowIcon = document.querySelectorAll('.icon-arrow');

accordion.forEach(btn =>
  btn.addEventListener('click', e => {
    const clicked = e.target.closest('.accordion-btn');
    console.log(clicked);

    clicked.classList.add('active');
  })
);
