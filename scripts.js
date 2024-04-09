/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

/*
CREDIT AND THANK YOU TO every single church website for information.
https://www.theshepherd.org/location, https://northridgeumc.org/, 
https://laplacita.mordntedigital.com/, https://olacathedral.org/mass-schedule,
https://olacathedral.org/mass-schedule, and every other website included, etc...
*/

/*
CREDIT AND THANK YOU TO Yelp, Google Images, Google Maps for images.
Full credit goes to the respective owners of these photos.
These images were not taken by me, I do not take any credit for them.
If any issues arise please do not hesitate to contact me and I will take them down,
and/or include your name for credit, and/or any other requests, etc...
Email: mr.carlortiz@gmail.com
*/

// This array of objects stores all the data for each individual church.
let churches = [
    { // SAN FERNANDO VALLEY
        name: "Sheperd of the Hills Church - Porter Ranch",
        region: "San Fernando Valley",
        services: [
            {
                day: "Saturday",
                time: "6:00 PM",
            },
            {
                day: "Sunday",
                time: "9:00 AM",
            },
            {
                day: "Sunday",
                time: "11:00 AM",
            },
            {
                day: "Thursday",
                time: "7:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://irwinseating-images.s3.amazonaws.com/Installations/Shepherd-Church/Shepherd-Church-0590.jpg",
        website: "https://www.theshepherd.org/location",
    },
    {
        name: "Sheperd of the Hills Church - Woodland Hills",
        region: "San Fernando Valley",
        services: [
            {
                day: "Sunday",
                time: "8:30 AM",
            },
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "11:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://i0.wp.com/premiumsignsolutions.com/wp-content/uploads/2023/03/Monument-sign1_Shepherd-Chruch_Woodland-Hills3.jpg?resize=300%2C200&ssl=1",
        website: "https://www.theshepherd.org/location",
    },
    {
        name: "Northridge United Methodist Church",
        region: "San Fernando Valley",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "11:30 AM",
            },
        ],
        languages: ["English", "Korean"],
        image: "https://scng-dash.digitalfirstmedia.com/wp-content/uploads/2019/11/Northridgeunitedmeth-16x9.jpgnov2019.jpg",
        website: "https://northridgeumc.org/",
    },
    { // CENTRAL LOS ANGELES
        name: "Our Lady Queen of Angels Catholic Church",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "8:00 AM",
            },
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "12:00 PM",
            },
            {
                day: "Sunday",
                time: "1:30 AM",
            },
            {
                day: "Sunday",
                time: "1:30 AM",
            },
            {
                day: "Monday to Friday",
                time: "12:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f6/be/ed/facciata.jpg?w=1200&h=1200&s=1",
        website: "https://laplacita.mordntedigital.com/",
    },
    {
        name: "New City Church of Los Angeles",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://newcitychurchla.com/wp-content/uploads/2012/01/latc2.jpg",
        website: "https://newcitychurchla.com/about/",
    },
    { 
        name: "Cathedral of Our Lady of the Angels",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "12:30 PM",
            },
            {
                day: "Monday to Friday",
                time: "7:00 AM",
            },
            {
                day: "Monday to Friday",
                time: "12:10 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://rafaelmoneo.com/wp/wp-content/uploads/2016/10/0620-09Fweb.jpg",
        website: "https://olacathedral.org/mass-schedule",
    },
    { // WESTSIDE
        name: "The Westside Church",
        region: "Westside",
        services: [
            {
                day: "Sunday",
                time: "10:30 AM",
            },
            {
                day: "Wednesday",
                time: "7:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://dq5pwpg1q8ru0.cloudfront.net/2022/04/19/14/56/18/db58a03d-2bfd-4053-860b-b9ff7586f60a/Screen%20Shot%202022-04-12%20at%204.51.40%20PM.png",
        website: "https://thewestsidechurch.com/",
    },
    { 
        name: "Cornerstone Church of West Los Angeles",
        region: "Westside",
        services: [
            {
                day: "Sunday (English)",
                time: "9:00 AM",
            },
            {
                day: "Sunday (Spanish)",
                time: "9:00 PM",
            },
            {
                day: "Sunday (English)",
                time: "11:00 AM",
            },
            {
                day: "Sunday (Farsi)",
                time: "11:00 PM",
            },
        ],
        languages: ["English", "Spanish", "Farsi"],
        image: "https://storage2.snappages.site/KVJZNX/assets/images/4591149_4368x2912_500.jpeg",
        website: "https://cornerstonewla.org/",
    },
    { 
        name: "Vintage Church L.A.",
        region: "Westside",
        services: [
            {
                day: "Sunday",
                time: "8:15 AM",
            },
            {
                day: "Sunday",
                time: "10:00 PM",
            },
            {
                day: "Sunday",
                time: "11:45 AM",
            },
        ],
        languages: ["English"],
        image: "https://images.squarespace-cdn.com/content/v1/5edd01c858851067a69b290e/a7c2a343-71d4-4051-af6b-c57489f200e7/20230827_105411_0003.jpg",
        website: "https://www.vintagechurchla.com/new",
    }, 
    { // SAN GABRIEL VALLEY
        name: "Saint Anthony Catholic Church",
        region: "San Gabriel Valley",
        services: [
            {
                day: "Sunday",
                time: "6:30 AM",
            },
            {
                day: "Sunday",
                time: "8:30 AM",
            },
            {
                day: "Sunday",
                time: "10:15 AM",
            },
            {
                day: "Sunday",
                time: "1:00 PM",
            },
            {
                day: "Sunday",
                time: "5:00 PM",
            },
            {
                day: "Monday to Saturday",
                time: "8:00 AM",
            },
            {
                day: "Monday to Saturday",
                time: "9:00 AM",
            },
            {
                day: "Sunday",
                time: "7:00 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfgf7MbEOHhvVkM6BXKrEHNsKI20gQX7wSNzxW3c3iA&s",
        website: "https://stanthonysg.org/",
    },
    {
        name: "San Gabriel Community Church",
        region: "San Gabriel Valley",
        services: [
            {
                day: "Sunday",
                time: "9:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYAx80OmvFzyjeTHby9wWpr0S_1pqzWVI7m_dMzax8Tg&s",
        website: "https://sangabrielcommunity.org/",
    },
    {
        name: "First Evangelical Church of San Gabriel Valley",
        region: "San Gabriel Valley",
        services: [
            {
                day: "Sunday",
                time: "9:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHilXbK_uR5NZW2p4lspRy1BKcFVOf-P3s6TiSTcI5hA&s",
        website: "https://www.sgvconnections.com/sunday-service",
    }, 
    { // SOUTH BAY
        name: "South Bay Community Church",
        region: "South Bay",
        services: [
            {
                day: "Sunday",
                time: "9:00 AM",
            },
            {
                day: "Sunday",
                time: "11:00 AM",
            },
            {
                day: "Saturday",
                time: "5:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZxyhYhVvihtMn8oQY-mCUXl8OenvFQ_XjsrFbLSuoA&s",
        website: "https://southbaycommunitychurch.com/",
    },
    {
        name: "Journey South Bay Church",
        region: "South Bay",
        services: [
            {
                day: "Sunday",
                time: "9:00 AM",
            },
            {
                day: "Sunday",
                time: "10:45 AM",
            },
        ],
        languages: ["English"],
        image: "https://images.squarespace-cdn.com/content/v1/53da9aefe4b07d85121c4f2b/1501092227393-6H3DMLR2GODLVZBCF0T0/JSBC-8.jpg",
        website: "https://www.journeysouthbay.org/",
    },
    {
        name: "South Bay Church of God",
        region: "South Bay",
        services: [
            {
                day: "Sunday",
                time: "11:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://static.wixstatic.com/media/8a1d68_6196adfe8d1d47c7b89d1b15e7029d45~mv2.jpg/v1/fill/w_640,h_398,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8a1d68_6196adfe8d1d47c7b89d1b15e7029d45~mv2.jpg",
        website: "https://www.sbcog.org/",
    }, 
    { // ANTELOPE VALLEY
        name: "Edwards Air Force Base Chapels 1 & 2",
        region: "Antelope Valley",
        services: [
            {
                day: "Sunday (Chapel 2)",
                time: "9:00 AM",
            },
            {
                day: "Sunday (Chapel 1)",
                time: "10:00 AM",
            },
            {
                day: "Sunday (Chapel 2)",
                time: "4:30 PM",
            },
            {
                day: "Monday (Chapel 2)",
                time: "11:30 AM",
            },
            {
                day: "Tuesday (Chapel 2)",
                time: "11:30 AM",
            },
            {
                day: "Thursday (Chapel 2)",
                time: "11:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLC3i3VncOOOMbwIMPsao4MV0k-vFIhYcSZZWwZZ0Jmg&s",
        website: "https://www.edwards.af.mil/About/Fact-Sheets/Display/Article/393896/412th-test-wing-chaplain-service/",
    },
    {
        name: "Antelope Valley Church",
        region: "Antelope Valley",
        services: [
            {
                day: "Sunday",
                time: "10:45 AM",
            },
            {
                day: "Sunday",
                time: "7:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Q1mxaK_5VZhN88pHHc7aiDea8_KLm1vrcJ1WoKjV5Q&s",
        website: "https://www.avchurch.org/",
    },
    {
        name: "Central Christian Church",
        region: "Antelope Valley",
        services: [
            {
                day: "Sunday",
                time: "9:00 AM",
            },
            {
                day: "Sunday",
                time: "10:45 AM",
            },
        ],
        languages: ["English"],
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/TtAvzMwN4vH-jGpqK2xE6g/1000s.jpg",
        website: "https://www.centralchristian.org/",
    },
    { // SOUTHEAST LOS ANGELES
        name: "Revive Church",
        region: "Southeast Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "12:00 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/n6XXQjW5HhSlaAJFWDF2aQ/l.jpg",
        website: "https://www.lifeatrevive.com/",
    }, 
    {
        name: "City Bible Church",
        region: "Southeast Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "9:30 AM",
            },
            {
                day: "Sunday",
                time: "3:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://www.monolithic.org/vault/img/2011/05/10/4dc92b85c29e068473000b46/large/citybible02.jpg",
        website: "https://www.citybible.church/",
    }, 
    {
        name: "Firehouse Church",
        region: "Southeast Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "9:30 AM",
            },
            {
                day: "Wednesday",
                time: "6:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdjNpUrVkFlYsgUSFSKtQ9UiCWHMJ0KWp8vhicC6peYQ&s",
        website: "https://firehousechurch.info/",
    }, 
    { // SANTA CLARITA
        name: "Santa Clarita Christian Fellowship Church",
        region: "Santa Clarita",
        services: [
            {
                day: "Sunday",
                time: "8:00 AM",
            },
            {
                day: "Sunday",
                time: "10:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://res.cloudinary.com/faithstreet-production/image/upload/c_fill,h_286,w_286/v1594833087/viqcuqfogr2bemgjumju.jpg",
        website: "https://mysccf.com/",
    },
    {
        name: "Grace Baptist Church",
        region: "Santa Clarita",
        services: [
            {
                day: "Sunday",
                time: "8:45 AM",
            },
            {
                day: "Sunday",
                time: "10:45 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpurflQkYZlmVugGjGfn7EMkakrlft0VpPSX8jKywwA&s",
        website: "https://www.gracebaptist.org/",
    },
    {
        name: "Elevate Church",
        region: "Santa Clarita",
        services: [
            {
                day: "Sunday",
                time: "8:30 AM",
            },
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "11:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpepEFMsjLo47UxpFwCF4dNlX7qgs3gwBYRsZY7dCJFw&s",
        website: "https://www.ielevatechurch.com/",
    },
];

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < churches.length; i++) {
        let church = churches[i];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, church.name, church.image, church.region, 
                        church.services, church.languages, church.website);
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, newRegion, 
                        newServices, newLanguages, newWebsite) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    const link = cardHeader.querySelector("a");
    link.textContent = newTitle;
    link.href = newWebsite;
    link.target = "_blank"; // Open the link in a new tab

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = "Image Coming Soon";

    const cardRegion = card.querySelector(".region");
    cardRegion.textContent = "Region: " + newRegion;

    // Display the services
    const serviceList = card.querySelector(".service-list");
    serviceList.innerHTML = ""; // Clear any existing services

    // Loop through the services array and add each service as a bullet point
    newServices.forEach(newServices => {
        const serviceItem = document.createElement("li");
        serviceItem.textContent = `${newServices.day}, ${newServices.time}`;
        serviceList.appendChild(serviceItem);
    });

    // Concatenate elements in languages array to create one string with all languages
    const languageList = card.querySelector(".language-list");
    languageList.innerHTML = ""; // Clear any existing languages
    const languagesItem = document.createElement("li");
    languagesItem.textContent = "Languages: " + newLanguages.join(", ");
    languageList.appendChild(languagesItem);
}

// This function adds filter buttons to the page
function showFilterButtons(churches) {
    const filterButtonsContainer = document.getElementById("filter-buttons");

    const regions = getUniqueRegions(churches);

    const allButton = createFilterButton("All");
    filterButtonsContainer.appendChild(allButton);

    regions.forEach(region => {
        const button = createFilterButton(region);
        filterButtonsContainer.appendChild(button);
    });
}

// Helper function to get unique regions from the churches array
function getUniqueRegions(churches) {
    const regions = new Set(); // a set stores unique, individual items (useful for retrieving unique regions)
    churches.forEach(church => regions.add(church.region)); 
    return Array.from(regions); // making a new array to return (arrays are used to iterate through each region)
}

// Helper function to create a filter button
function createFilterButton(region) {
    const button = document.createElement("button");
    button.className = "button-74";
    button.textContent = region;
    button.dataset.region = region.toLowerCase().replace(/\s+/g, ' '); // clean and readable data attribute
    return button;
}

// This function adds event listeners to the filter buttons
function addFilterButtonListeners() {
    const filterButtons = document.querySelectorAll('.button-74');
    filterButtons.forEach(button => {
        const region = button.dataset.region; 
        button.addEventListener('click', () => {
            filterCardsByRegion(region);
        });
    });
}

// This function filters the cards based on the selected region
function filterCardsByRegion(region) {
    const cards = document.querySelectorAll('.card');
    const blueprintCardIndex = cards.length - 1; // to not show the predefined html card

    cards.forEach((card, index) => {
        const cardRegion = card.querySelector('.region').textContent.replace('Region: ', '');
        
        if (index === blueprintCardIndex) {
            card.style.display = 'none';
        } else if (region.toLowerCase() === 'all' || cardRegion.toLowerCase() === region.toLowerCase()) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none'; 
        }
    });
}

// This function adds event listener to the search input field
function addSearchEventListener() {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchByName);
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchByName();
        }
    });
}

function searchByName() {
    const cards = document.querySelectorAll('.card');
    const blueprintCardIndex = cards.length - 1; // to not show the predefined html card
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
    const displayedCards = document.querySelectorAll('.card'); // Select all cards
    
    displayedCards.forEach((card, index) => {
        const cardTitle = card.querySelector('h2').textContent.toLowerCase(); // Get the church name from the card

        if (index === blueprintCardIndex) {
            card.style.display = 'none';
        }
        else if (searchQuery === '') {
            card.style.display = 'block'; 
        } else if (cardTitle.includes(searchQuery)) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });
}

// This calls necessary functions when the page is first loaded
document.addEventListener("DOMContentLoaded", () => {
    showCards();
    showFilterButtons(churches); 
    addFilterButtonListeners();
    addSearchEventListener();
});