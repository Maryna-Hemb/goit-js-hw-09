import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const timeInput = document.querySelector("#datetime-picker");
const btnStartEl = document.querySelector("[data-start]");
const dataDaysEl = document.querySelector("[data-days]");
const dataHoursEl = document.querySelector("[data-hours]");
const dataMinutesEl = document.querySelector("[data-minutes]");
const dataSecondsEl = document.querySelector("[data-seconds]");
const bodyEl = document.querySelector("body");
btnStartEl.setAttribute("disabled", "")


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      if (selectedDates[0]  - options.defaultDate < 0) { 
       Notiflix.Notify.failure("Please choose a date in the future");
       btnStartEl.setAttribute("disabled", "");}
      else if (selectedDates[0] - options.defaultDate > 0) { btnStartEl.removeAttribute("disabled");
       console.log("hello");
       btnStartEl.addEventListener("click", onTimerCount);
       function onTimerCount(){
        console.log("timer");
        setInterval(()=>{const ms = selectedDates[0] - Date.now();
            if(ms < 0){return}
            console.log(ms);
            const deltatime = convertMs(ms)
            console.log(deltatime );
            dataDaysEl.textContent = deltatime.days;
            dataHoursEl.textContent = deltatime.hours;
            dataMinutesEl.textContent = deltatime.minutes;
           dataSecondsEl.textContent = deltatime.seconds;
           dataSecondsEl.style.color = getRandomHexColor();
        },1000)      
        } 
    };
   },
};


const fp = flatpickr(timeInput, options);


function addLeadingZero(value){
    return String(value).padStart(2, "0")
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}


// BackgroundAnimation


