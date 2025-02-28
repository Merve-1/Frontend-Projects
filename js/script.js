let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".course-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,

    pagination:{
        el: '.swiper-pagination',
        clickable :true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".instructor-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,

    pagination:{
        el: '.swiper-pagination',
        clickable :true,
    },
    breakpoints: {
        540: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

const modeBtn = document.getElementById('mode');
modeBtn.onchange = (e) => {
    if (modeBtn.checked === true) {
      document.documentElement.classList.remove("light")
      document.documentElement.classList.add("dark")
      window.localStorage.setItem('mode', 'dark');
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.classList.add("light")
      window.localStorage.setItem('mode', 'light');
    }
  }

const mode = window.localStorage.getItem('mode');

if (mode == 'dark') {
    modeBtn.checked = true;
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  }
  
if (mode == 'light') {
    modeBtn.checked = false;
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light")
  }
