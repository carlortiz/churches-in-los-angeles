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
    {
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
    }
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
