const visitDisplay = document.querySelector("#visits");

let visits = Number(window.localStorage.getItem("numVisits")) || 0;

if (visits != 0 ) {
    visitDisplay.textContent = visits;
}

else {
    visitDisplay.textContent = "This is your first visit to the site. Welcome!"
}

visits++;

localStorage.setItem("numVisits", visits);