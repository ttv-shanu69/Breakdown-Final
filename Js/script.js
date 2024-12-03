const MenuIcon = document.querySelector('.bx-menu');
const closeIcon = document.querySelector('.fa-xmark')
const MenuBar = document.querySelector('.menu-bar');

MenuIcon.addEventListener("click", ()=> {

setTimeout(() => MenuBar.classList.add('active'), 10);
MenuIcon.style.display = 'none';
closeIcon.style.display = 'inline-block';

});

closeIcon.addEventListener("click", ()=> {

setTimeout(() => MenuBar.classList.remove('active'), 300);
MenuIcon.style.display = 'inline-block';
closeIcon.style.display = 'none';

});


const NavBar = document.querySelector('.top-bar');

function ChangeBar () {
    const ScrollValue = window.scrollY;
    
    if(ScrollValue > 70) {
        NavBar.classList.add('tb-h')
    } else {
        NavBar.classList.remove('tb-h')
    }
};
window.addEventListener("scroll", ChangeBar);

const swiper = new Swiper('.card-swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   breakpoints: {
        0:{
            slidesPerView: 1
        },
        750:{
            slidesPerView: 2
        },
        1074:{
            slidesPerView: 3
        },
    }
});

const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});
elements.forEach(el => observer.observe(el));

const sliderImages = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSliderPosition() {
    sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
    updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image
    updateSliderPosition();
});