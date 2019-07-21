/**
 * Created by alexander on 21/07/2019.
 */
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('#carouselPrevBtn');
const nextBtn = document.querySelector('#carouselNextBtn');

//counter
let counter = 1;
const size = carouselImg[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

nextBtn.addEventListener('click', ()=>{
    if (counter <= 0) {return}
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

prevBtn.addEventListener('click', ()=>{
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

carouselSlide.addEventListener('transitionend', ()=> {
    console.log("Fired!");
    if (carouselImg[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - 2;
    } else if (carouselImg[counter].id ==="firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImg.length - counter;
    }

});