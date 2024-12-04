const arrowLeft = document.querySelector(".button-left");
const arrowRight = document.querySelector(".button-right");
const slides = document.querySelectorAll(".slider-image");
const dots = document.getElementById("dots");

let currentIndexSlide = 0;
const dotsSlide = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    dots.appendChild(div);
    dotsSlide.push(div);
}

function addPaginationCircle() {
    slides.forEach(createPaginationCircle);
    dotsSlide[0].classList.add("active");
    dotsSlide.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClassPaginationCircle() {
    dotsSlide[currentIndexSlide].classList.add("active");
}

function removeActiveClassPaginationCircle() {
    dotsSlide[currentIndexSlide].classList.remove("active");
}

function showSlide() {
    slides[currentIndexSlide].classList.add("block");
}

function hideSlide() {
    slides[currentIndexSlide].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClassPaginationCircle();
    currentIndexSlide = slideIndex;
    addActiveClassPaginationCircle();
    showSlide();
}

function nextSlide() {
    let newSlideIndex = currentIndexSlide + 1;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentIndexSlide - 1;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
    }
    changeSlide(newSlideIndex);
}

addPaginationCircle();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);