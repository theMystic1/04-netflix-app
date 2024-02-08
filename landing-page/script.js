'use strict';

const container = document.querySelector('.questions-answers');

const btns = document.querySelectorAll('.plus-cancel-btn');

const btnsPlus = document.querySelectorAll('.plus');
const btnsCancel = document.querySelectorAll('.cancel');

const answers = document.querySelectorAll('.answers');

const questions = document.querySelectorAll('.question');
const iconBtn = document.querySelector('.ion-2');
const abs = document.querySelector('.abs');

const nav = document.querySelector('.listss');

container.addEventListener('click', function (e) {
  const click = e.target.closest('.plus-cancel-btn');

  // .classList.toggle('.btn--hide');
  // click.classList.add('btn--hide');
  if (!click) return;
  // console.log(click);
  Array.from(click.children).forEach(btn => {
    if (btn?.classList.contains('active')) {
      btn.classList.remove('active');
      btn.classList.add('cont-ans');
    } else {
      btn.classList.add('active');
      btn.classList.remove('cont-ans');
    }
  });

  // remove for each slide
  answers.forEach((answer, i) => {
    answer.classList.remove('active');
    // answer.classList.add('cont-ans');
  });

  const openAns = document.querySelector(`.answers--${click.dataset.tab}`);
  if (openAns.classList.contains('cont-ans')) {
    openAns.classList.remove('cont-ans');
    openAns.classList.add('active');
  } else {
    openAns.classList.add('cont-ans');
    openAns.classList.remove('active');
  }
  // console.log(click.dataset.tab);

  // clickedAns.classList.remove('cont-ans');
  // clickedAns.classList.add('active');
});

iconBtn.addEventListener('click', function () {
  abs.classList.toggle('hidden');
});

nav.addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains('nav--link')) {
    const id = e.target.getAttribute('href');
    e.preventDefault();
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// slide in

const allSections = document.querySelectorAll('.section');

const sectionCallBack = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(sectionCallBack, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
