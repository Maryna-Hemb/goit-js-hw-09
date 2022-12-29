import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { getRandomHexColor } from "./01-color-switcher"

const bodyEl = document.querySelector("body");
const timeInput = document.querySelector("#datetime-picker");
const btnStartEl = document.querySelector("[data-start]");
const dataDaysEl = document.querySelector("[data-days]");
const dataHoursEl = document.querySelector("[data-hours]");
const dataMinutesEl = document.querySelector("[data-minutes]");
const dataSecondsEl = document.querySelector("[data-seconds]");

btnStartEl.setAttribute("disabled", "")


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0]  - options.defaultDate < 0) { 
       Notiflix.Notify.failure("Please choose a date in the future");
       btnStartEl.setAttribute("disabled", "");}
      else if (selectedDates[0] - options.defaultDate > 0) { btnStartEl.removeAttribute("disabled");
      btnStartEl.addEventListener("click", onTimerCount);
       function onTimerCount(){
         setInterval(()=>{const ms = selectedDates[0] - Date.now();
            if(ms < 0){return}
            dataDaysEl.textContent = convertMs(ms).days;
            dataHoursEl.textContent = convertMs(ms).hours;
            dataMinutesEl.textContent = convertMs(ms).minutes;
           dataSecondsEl.textContent = convertMs(ms).seconds;
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


// For BackgroundAnimation add class
bodyEl.classList.add("bg-animation")
bodyEl.classList.backgroundColor = "#385353"