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