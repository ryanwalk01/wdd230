const dark = document.querySelector("#dark");
const main = document.querySelector("main");
const cards = document.querySelectorAll(".card");
const body = document.querySelector("body");

dark.addEventListener("click", () => {
    main.classList.toggle("dark");
    body.classList.toggle("dark");
    dark.classList.toggle("dark");
    cards.forEach(card => {
        card.classList.toggle("dark");
    });

});