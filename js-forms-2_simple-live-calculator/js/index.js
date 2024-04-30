console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');


firstInput.addEventListener("input", (e)=>{
    firstInput.value = e.target.value;
    result.textContent= firstInput.value * secondInput.value;
})

secondInput.addEventListener("input", (e)=>{
    secondInput.value = e.target.value;
    result.textContent= firstInput.value * secondInput.value;
})
