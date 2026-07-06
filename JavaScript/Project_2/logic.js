const form = document.querySelector("form");
const results = document.querySelector("#results");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    if (isNaN(height) || height <= 0) {
        results.innerText = "Please give a valid height";
    }
    else if (isNaN(weight) || weight <= 0) {
        results.innerText = "Please give a valid weight";
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerText = bmi;
    }
});