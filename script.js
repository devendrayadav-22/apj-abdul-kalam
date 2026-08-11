'use strict';

const body = document.querySelector('body');
const welcomeScreen = document.querySelector('#welcome-screen');
const mainContainer = document.querySelector('.main-container');
const revealEle = document.querySelectorAll('.reveal');
const progressBar = document.querySelector('.progress-bar');
const percentValue = document.querySelector('#percent-value');
const scrollBackButton = document.querySelector('.top-scroll');
const changeMode = document.querySelector('.change-mode');
const nextMode = document.querySelector('.next-mode');
const stateEmoji = document.querySelector('.state-emoji');

// remove the welcomscreen
welcomeScreen.addEventListener('animationend', () => {
  welcomeScreen.remove();
});

// reveal the scroll behaviour
const revealOnScroll = function () {
  revealEle.forEach(ele => {
    const { y } = ele.getBoundingClientRect();
    if (window.innerHeight > y) {
      ele.classList.add('reveal-show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// progress bar calculation and all
const progBar = function () {
  const currScroll = window.scrollY;
  const visibleScreen = window.innerHeight;
  const totalPageHeight = document.documentElement.scrollHeight;
  const maxScroll = totalPageHeight - visibleScreen;
  const scrollPercent = (currScroll / maxScroll) * 100;
  progressBar.style.width = `${scrollPercent}%`;

  if (scrollPercent >= 100) {
    progressBar.style.backgroundColor = 'green';
  } else {
    progressBar.style.backgroundColor = 'rgb(151, 26, 26)';
  }
  percentValue.textContent = Math.trunc(scrollPercent);

  if (window.scrollY >= 300) {
    scrollBackButton.style.opacity = 1;
    scrollBackButton.style.visibility = 'visible';
  } else {
    scrollBackButton.style.opacity = 0;
    scrollBackButton.style.visibility = 'hidden';
  }
};
window.addEventListener('scroll', progBar);
progBar();

//scroll bar button
//for use this check accessibility -->visula effect -> animation ->on

scrollBackButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const applyTheme = function () {
  if (nextMode.textContent == 'dark') {
    body.classList.add('body-dark-mode');
    mainContainer.classList.add('main-container-dark-mode');
    changeMode.classList.add('light-mode-button');
    stateEmoji.textContent = '☀️';
    nextMode.textContent = 'light';
  } else {
    body.classList.remove('body-dark-mode');
    mainContainer.classList.remove('main-container-dark-mode');
    changeMode.classList.remove('light-mode-button');
    stateEmoji.textContent = '🌙';
    nextMode.textContent = 'dark';
  }
};

changeMode.addEventListener('click', ()=>{
    applyTheme();
});


