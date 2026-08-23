document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(function (question) {
        // Set initial accessibility state
        question.setAttribute("aria-expanded", "false");

        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains("active");

            question.classList.toggle("active");
            question.setAttribute("aria-expanded", !isOpen);

            if (isOpen) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

document.getElementById("calculate-btn").addEventListener("click", function () {
    const wattageInput = document.getElementById("wattage");
    const hoursInput = document.getElementById("hours");
    const priceInput = document.getElementById("price");

    const wattage = parseFloat(wattageInput.value);
    const hours = parseFloat(hoursInput.value);
    const priceCents = parseFloat(priceInput.value);

    const resultDiv = document.getElementById("result");

    // Clear previous errors
    let isValid = true;
    isValid = validateField(wattageInput, "wattage-error", wattage, 1, 15000, "Enter a wattage between 1 and 15000") && isValid;
    isValid = validateField(hoursInput, "hours-error", hours, 0, 24, "Enter hours between 0 and 24") && isValid;
    isValid = validateField(priceInput, "price-error", priceCents, 0.1, 200, "Enter a price between 0.1 and 200") && isValid;

    if (!isValid) {
        resultDiv.textContent = "";
        return;
    }

    // Convert watts to kilowatts, multiply by hours to get kWh used per day
    const kWhPerDay = (wattage / 1000) * hours;

    // Convert price from cents to dollars, multiply by kWh
    const costPerDay = kWhPerDay * (priceCents / 100);
    const costPerMonth = costPerDay * 30;
    const costPerYear = costPerDay * 365;

    resultDiv.innerHTML = `
        Daily usage: ${kWhPerDay.toFixed(2)} kWh<br>
        Daily cost: $${costPerDay.toFixed(2)}<br>
        Monthly cost: $${costPerMonth.toFixed(2)}<br>
        Yearly cost: $${costPerYear.toFixed(2)}
    `;
});

function validateField(inputEl, errorId, value, min, max, message) {
    const errorEl = document.getElementById(errorId);

    if (isNaN(value) || inputEl.value.trim() === "") {
        errorEl.textContent = "This field is required.";
        inputEl.classList.add("invalid");
        return false;
    }

    if (value < min || value > max) {
        errorEl.textContent = message;
        inputEl.classList.add("invalid");
        return false;
    }

    errorEl.textContent = "";
    inputEl.classList.remove("invalid");
    return true;
}