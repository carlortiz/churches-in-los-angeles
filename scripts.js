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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
        website: "https://www.centralchristian.org/",
    },
    { // SOUTHEAST LOS ANGELES
        name: "Revive Church",
        region: "Southeast Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "11:00 AM",
            },
            {
                day: "Sunday",
                time: "7:30 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "",
        website: "https://www.revivelachurch.org/",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
        image: "",
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
    link.href = newWebsite; // Set the href attribute to the website URL
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

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
