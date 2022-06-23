let slide = document.querySelector('.slide');
let slideImages = document.querySelectorAll('.images');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

let slideWidth = slideImages[0].clientWidth;

let totalImg = slideImages.length;

let count = 0;

function slideShow(){
    slideImages.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });
    slideImages[0].classList.add('active');
}

slideShow();

next.addEventListener("click",() => {
    if(count >= totalImg - 1)
    {
        goToSlide(0)
        return;
    }
    count++
    goToSlide(count);
})

prev.addEventListener("click",() => {
    if(count <= 0)
    {
        goToSlide(totalImg - 1)
     
        return;
    }
    count--;
    goToSlide(count);
})


function goToSlide(slideNumber){

    slide.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
    count = slideNumber;
    setActiveClass();
}

function setActiveClass(){

    let currentActive = document.querySelector(".slide.active");
    currentActive.classList.remove("active");
    slideImages[count].classList.add("active");
}

