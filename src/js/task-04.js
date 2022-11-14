const btnDecr = document.querySelectorAll("button")[0];
const btnIncr = document.querySelectorAll("button")[1];

let counterValue = 0;

btnDecr.addEventListener(`click`, (event) => {
    counterValue = counterValue - 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
})

btnIncr.addEventListener(`click`, (event) => {
    counterValue += 1;
    const valueEl = document.querySelector(`span`);
    valueEl.textContent = counterValue;
})

