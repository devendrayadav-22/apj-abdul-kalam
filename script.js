'use strict'

const welcomeScreen = document.querySelector('#welcome-screen');
const mainContainer = document.querySelector('.main-container');
const revealEle = document.querySelectorAll('.reveal');
const progressBar = document.querySelector('.progress-bar');
const percentValue = document.querySelector('#percent-value');
const scrollBackButton = document.querySelector('.top-scroll');
// const introContent = document.querySelectorAll('.intro-content');

// remove the welcomscreen
welcomeScreen.addEventListener('animationend', () => {
    welcomeScreen.remove();
});

// reveal the scroll behaviour
const revealOnScroll = function(){
    revealEle.forEach((ele) => {
        const {y} = ele.getBoundingClientRect();
        if(window.innerHeight > y){
            ele.classList.add('reveal-show');
        }
    })
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// progress bar calculation and all
const progBar = function(){
    const currScroll = window.scrollY;
    const visibleScreen = window.innerHeight;
    const  totalPageHeight= document.documentElement.scrollHeight;
    const maxScroll = totalPageHeight - visibleScreen;
    const scrollPercent = (currScroll / maxScroll) * 100;
    progressBar.style.width = `${scrollPercent}%`;
    
    if(scrollPercent >= 100){
        progressBar.style.backgroundColor = "green";
    }
    else{
        progressBar.style.backgroundColor = "rgb(151, 26, 26)"
    }

    percentValue.textContent = Math.trunc(scrollPercent);
}
window.addEventListener('scroll', progBar);
progBar();



// const revealOnScroll = function(){
//   revealEle.forEach((ele) => {
//         const {y} = ele.getBoundingClientRect();
//         if(window.innerHeight > y){
//             ele.classList.add('reveal-show')
//         }
//     });  
// }
// window.addEventListener('scroll', revealOnScroll);

// const revealIntroContent = function(){
//     introContent.forEach((pra) => {
//         const {y} = pra.getBoundingClientRect();
//         if(window.innerHeight > y){
//             pra.classList.add('reveal-show')
//         }
//     })
// };
// window.addEventListener('scroll', revealIntroContent);
// revealIntroContent();
// revealOnScroll();


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

