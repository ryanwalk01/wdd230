const baseURL = "http://127.0.0.1:65018/";
// const linksURL = "https://ryanwalk01.github.io/wdd230/data/links.json"
const linksURL = "http://127.0.0.1:65018/data/links.json";
const learningDiv = document.querySelector('#learning');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data.weeks)
    displayLinks(data.weeks);
}
getLinks();

function displayLinks(weeks) {
    weeks.forEach(week => {
        let line = document.createElement('section');
        let weekTitle = document.createElement('p');

        weekTitle.textContent = `${week.week}: `;
        line.appendChild(weekTitle);

        week.links.forEach((link, i) => {
            let linkElement = document.createElement('a');
            linkElement.setAttribute('href', link.url);
            linkElement.textContent = link.title;

            line.appendChild(linkElement);

            if (i !== week.links.length - 1) {
                line.appendChild(document.createTextNode(' | '));
            }
        });

        learningDiv.appendChild(line);
    });
}