import "./style.css";

const heightInput = document.getElementById('heightInput') as HTMLInputElement;
const ageInput = document.getElementById('ageInput') as HTMLInputElement;
const breitCheck = document.getElementById('breitCheck') as HTMLInputElement;
const schmalCheck = document.getElementById('schmalCheck') as HTMLInputElement;
const btn = document.getElementById('btn') as HTMLButtonElement;
const output = document.getElementById('output') as HTMLSpanElement;

btn?.addEventListener('click', () => {
    const heightInputValue: number = Number(heightInput.value);
    const ageInputValue: number = Number(ageInput.value);
    let result = 0;
    if(breitCheck.checked){
        result = Math.round(((heightInputValue - 100) + (ageInputValue / 10)) * 0.9 * 1.1);
    } else if(schmalCheck.checked){
        result = Math.round(((heightInputValue - 100) + (ageInputValue / 10)) * 0.9 * 0.9);
    }
    output.textContent = `${result.toString()} kg`;
});