document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const hiddenMessage = document.getElementById("hiddenMessage");

    yesButton.addEventListener("click", function() {
        hiddenMessage.classList.remove("hidden");
    });

    noButton.addEventListener("mouseover", function() {
        const card = document.querySelector(".card");
        const cardRect = card.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        const maxX = cardRect.width - noButtonRect.width;
        const maxY = cardRect.height - noButtonRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
});