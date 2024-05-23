// Visits
let date = Date.now();

if (localStorage.getItem('date')) {
    let lastVisitTimestamp = parseInt(localStorage.getItem('date'));
    let lastVisit = new Date(lastVisitTimestamp);
    let currentDate = new Date();
    let timeDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));

    if (timeDifference == 0) {
        document.querySelector('#visits').innerHTML = '<p>Back so soon! Awesome!</p>';
    } else {
        document.querySelector('#visits').innerHTML = `<p>You last visited ${timeDifference} days ago.</p>`;
    }
} else {
    document.querySelector('#visits').innerHTML = '<p>Welcome! Let us know if you have any questions.</p>';
}

localStorage.setItem('date', date);