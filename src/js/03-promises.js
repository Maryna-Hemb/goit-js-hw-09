import Notiflix from 'notiflix';

const formEl = document.querySelector("form")
const firstDelayEl = document.querySelector("[name=delay]");
const stepEl = document.querySelector("[name=step]");
const amountEl = document.querySelector("[name=amount]");
const btnEl = formEl.querySelector("button");

formEl.addEventListener("submit",  onFormPromiceCreate)

function onFormPromiceCreate(evt){
  evt.preventDefault();
  let position = 0;
  let delay = Number(firstDelayEl.value);
  for(let i=0; i < Number(amountEl.value); i +=1) {
    delay +=  Number(stepEl.value);
     position += 1;
    createPromise(position, delay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });;
  }
}


function createPromise(position, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => { if (shouldResolve) {
      res({ position, delay });
         } else {
      rej({ position, delay });     
    }}, delay)
 })
 
}

