const file = "data/members.json";
fetch(file)
    .then(response => response.json())
    .then(data => displayMembers(data.members))

const cards = document.querySelector('#cards');

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let logo = document.createElement('img');
        let membership = document.createElement('p');
        let hours = document.createElement('p');

        name.textContent = `${member.name}`;
        address.textContent = `Address: ${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        website.textContent = `Website: ${member.website}`;
        membership.textContent = `Membership Level: ${member.membership}`;
        hours.textContent = `Business Hours: ${member.hours}`;

        logo.setAttribute('src', `images/${member.logo}.webp`);
        logo.setAttribute('alt', `logo of ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '400');
        logo.setAttribute('height', '400');

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(hours);
        cards.appendChild(card);
    });
}

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards")

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});