//Weather
const currentTemp = document.querySelector('#current-temp');
const description = document.querySelector('#description');
const forecast = document.querySelector('#forecast');

const dayUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=39.26&lon=-81.56&units=imperial&appid=87735150c2dde6d1d1dd1ff5ebc988f4';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.26&lon=-81.56&units=imperial&appid=87735150c2dde6d1d1dd1ff5ebc988f4';

async function apiFetch() {
    try {
        const dayResponse = await fetch(dayUrl);
        if (!dayResponse.ok) {
            throw Error(await dayResponse.text());
        }
        const dayData = await dayResponse.json();

        const forecastResponse = await fetch(forecastUrl);
        if (!forecastResponse.ok) {
            throw Error(await forecastResponse.text());
        }
        const forecastData = await forecastResponse.json();
        displayResults(dayData, forecastData);
    }
    catch (error) {
        // console.log(error);
    }
}

function displayResults(dayData, forecastData) {

    currentTemp.innerHTML = `Current Temperature: ${Math.round(dayData.main.temp)}°F`;
    description.innerHTML = `- ${(dayData.weather[0].description)}`;



    const days = [forecastData.list[3], forecastData.list[11], forecastData.list[19]];

    days.forEach(day => {
        let card = document.createElement('section');
        let date = document.createElement('h3');
        let temp = document.createElement('p');

        date.textContent = day.dt_txt.substr(5, 5);
        temp.textContent = `Temp: ${Math.round(day.main.temp)}°F`;

        card.appendChild(date);
        card.appendChild(temp);
        forecast.appendChild(card);
    });
}

apiFetch();

//Spotlight
const spotlightCards = document.querySelector('#spotlight')
const membersFile = "data/members.json";
let spotlightList = [];

fetch(membersFile)
    .then(response => response.json())
    .then(data => displaySpotlight(data.members));

const displaySpotlight = (members) => {
    members.forEach((member) => {
        if (member.membership == "Silver" || member.membership == "Gold") {
            spotlightList.push(member);
        }
    })
    let spotlight1 = Math.floor(Math.random() * spotlightList.length);
    let spotlight2;
    let spotlight3;
    do {
        spotlight2 = Math.floor(Math.random() * spotlightList.length);
        spotlight3 = Math.floor(Math.random() * spotlightList.length);
    }
    while (spotlight2 == spotlight1 || spotlight2 == spotlight3 || spotlight3 == spotlight1);

    spotlights = [spotlight1, spotlight2, spotlight3];

    spotlights.forEach((num) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let logo = document.createElement('img');
        let hours = document.createElement('p');

        name.textContent = `${members[num].name}`;
        address.textContent = `Address: ${members[num].address}`;
        phone.textContent = `Phone: ${members[num].phone}`;
        website.textContent = `Website: ${members[num].website}`;
        hours.textContent = `Business Hours: ${members[num].hours}`;

        logo.setAttribute('src', `images/${members[num].logo}.webp`);
        logo.setAttribute('alt', `logo of ${members[num].name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '300');
        logo.setAttribute('height', '300');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(hours);
        spotlightCards.appendChild(card);
    })

}

// Banner
const bannerButton = document.querySelector('#closeBanner');
const banner = document.querySelector('#banner');

const date = new Date();
let day = date.getDay();

if (day == 1 || day == 2 || day == 3) {

    bannerButton.addEventListener('click', () => {
        banner.style.display = 'none';
        bannerButton.style.display = 'none';
    })
}
else {
    banner.style.display = 'none';
    bannerButton.style.display = 'none';
}