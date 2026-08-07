'use strict'
const welcomScreen = document.querySelector('#welcome-screen');
const mainContainer = document.querySelector('.main-container');
const revealEle = document.querySelectorAll('.reveal');

welcomScreen.addEventListener('animationed', () => {
    welcomScreen.remove();
});


// setTimeout(()=>{
//     welcomScreen.remove();
// },3500);

// setTimeout(() => {
//     mainContainer.classList.add('anima');
// },2500);
// window.scrollTo(0, 0);
// window.addEventListener("load", () =>{
//     window.scrollTo({
//         top : 0,
//         behavior : "instant",
//     });
// });

