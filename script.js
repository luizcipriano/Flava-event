let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.front-page',
        start: '0%',
        end: '100%',
        scrub: true,
        pin: true
    }
})

tl.fromTo(".front-page",
{clipPath: "circle(5%)"},
{clipPath: "circle(75%)", duration: 3 }
);
tl.fromTo('.music-note', {scale: 0.5}, {scale: 0, opacity: 0, duration: 1 ,}, "-=3"
);

tl.fromTo('.content', {opacity: 0 }, {opacity: 1, duration: 1 });
tl.fromTo('.nav-effect', {opacity: 0 }, {opacity: 1, duration: 1 });



// TIME TO START
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