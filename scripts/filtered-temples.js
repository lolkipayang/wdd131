const today = new Date();
const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short' // Added for timezone
};

full.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    options
).format(today)}</span>`;
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Ber-Switzerland Temple",
        location: "Ber, Switzerland",
        dedicated: "2004, August, 9",
        area: 903376,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/ber-switzerland-temple-lds-903376-wallpaper.jpg"
    },
    {
        templeName: "Barranquilla Columblia Temple",
        location: "Barranquilla Columblia",
        dedicated: "1990, June, 20",
        area: 2135198,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/800x500/3-Barranquilla-Columblia-Temple-2135198.jpg"
    },
    {
        templeName: "Asunción Paraguay Temple",
        location: "Asunción, Paraguay",
        dedicated: "1999, march, 21",
        area: 123642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/800x500/4-e49cfde212b104b97a0463371127c11e47f9c084.jpeg"
        
    },
];
  
const templeCardsContainer = document.getElementById('temple-cards-container');

// Function to create and display a single temple card
function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card'); // Add a class for styling

    card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    return card;
}

// Function to display temples in the container
function displayTemples(filteredTemples) {
    templeCardsContainer.innerHTML = ''; // Clear previous content
    filteredTemples.forEach(temple => {
        templeCardsContainer.appendChild(createTempleCard(temple));
    });
}

// Function to extract the dedication year
function getDedicationYear(dedicatedString) {
    // The dedicated string is like "2005, August, 7"
    const year = parseInt(dedicatedString.split(',')[0].trim());
    return year;
}

// Event listener for navigation links/buttons
document.addEventListener('DOMContentLoaded', () => {
    // Initial display of all temples when the page loads
    displayTemples(temples);

    document.getElementById('home-link').addEventListener('click', () => {
        displayTemples(temples);
    });

    document.getElementById('old-link').addEventListener('click', () => {
        const oldTemples = temples.filter(temple => getDedicationYear(temple.dedicated) < 1900);
        displayTemples(oldTemples);
    });

    document.getElementById('new-link').addEventListener('click', () => {
        const newTemples = temples.filter(temple => getDedicationYear(temple.dedicated) > 2000);
        displayTemples(newTemples);
    });

    document.getElementById('large-link').addEventListener('click', () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        displayTemples(largeTemples);
    });

    document.getElementById('small-link').addEventListener('click', () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        displayTemples(smallTemples);
    });
});