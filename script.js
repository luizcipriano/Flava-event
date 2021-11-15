let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.front-page',
        start: '0%',
        end: '100%',
        scrub: true,
        pin: true
    }
})

if (window.matchMedia("(max-width: 990px)").matches){
    tl.fromTo(".front-page",
    {clipPath: "circle(20%)"},
    {clipPath: "circle(75%)", duration: 3 }
    );
    tl.fromTo('.music-note', {scale: 0.5}, {scale: 0, opacity: 0, duration: 1 ,}, "-=3"
    );
    
    tl.fromTo('.content', {opacity: 0 }, {opacity: 1, duration: 1 });
    tl.fromTo('.nav-effect', {opacity: 0 }, {opacity: 1, duration: 1 });
}else{
    tl.fromTo(".front-page",
    {clipPath: "circle(5%)"},
    {clipPath: "circle(75%)", duration: 3 }
    );
    tl.fromTo('.music-note', {scale: 0.5}, {scale: 0, opacity: 0, duration: 1 ,}, "-=3"
    );
    
    tl.fromTo('.content', {opacity: 0 }, {opacity: 1, duration: 1 });
    tl.fromTo('.nav-effect', {opacity: 0 }, {opacity: 1, duration: 1 });
}



// TIMER
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const myBirth = '12 Jan 2022';

function countdown(){
    const myBirthday = new Date(myBirth);
    const currentDate = new Date();
    const totalSeconds = (myBirthday - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();
setInterval(countdown, 1000)


// NAV-BAR CHANGE COLOR
const secondPage = document.querySelector('.second-page')
const topSecondPage = secondPage.offsetTop;
console.log(topSecondPage)
document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("scroll", function(){
        if (window.scrollY > topSecondPage + 300){
            this.document.getElementById("navmenu").classList.add("bg-secondary-black");
        }
    })
})

// SLIDER 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
          },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,

          },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        }
      },
    navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique"
    },
  });
  
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 22,
    slidesPerGroup: 3,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
            centeredSlides: true,
            centeredSlidesBounds: true,
          },
        480: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
          },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
  });