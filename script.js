const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerclose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < triggerOpen.length; i++) {
    let currentId = triggerOpen[i].dataset.target,
    targetEl = document.querySelector(`#${currentId}`)

    const openData = function() {
        targetEl.classList.remove('active');
        overlay.classList.remove('active')
    };
    triggerOpen[i].addEventListener('click', function() {
        targetEl.classList.add('active');
        overlay.classList.add('active');
    });

    targetEl.querySelector('[close-button]').addEventListener('click', openData);
    overlay.addEventListener('click', openData);
}

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a')

window.onscroll = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#search-menu').onclick = () => {
    document.querySelector('#search-menu-link').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

// ------- home section------//

var swiper = new Swiper(".home-slider", {
   spaceBetween: 50,
   centeredSlides: true,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
   },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

// ------- review section------//
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
     delay: 2500,
     disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            sliderPerView: 1,
        },
        640: {
            sliderPerView: 2,
        },
        768: {
            sliderPerView: 2,
        },
        1024: {
            sliderPerView: 3,
        },
    },
   });