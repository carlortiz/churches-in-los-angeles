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
    {
        name: "The Church of Jesus Christ of Latter-day Saints",
        region: "San Fernando Valley",
        services: [
            {
                day: "Sunday",
                time: "9:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg",
        website: "https://local.churchofjesuschrist.org/en/us/ca/chatsworth/10123-oakdale-avenue?utm_source=gmb&utm_medium=yext&gad_source=1&gclid=Cj4KCQjwztOwBhD7ARItAPDKnkDJKtp1uw3xeL-mPT3BPyNOf-rsf3vxi7XrIltFT8M4iL8SAXZRVshuGgKXqRAC8P8HAQ",
    },
    {
        name: "St Catherine of Siena Catholic Church",
        region: "San Fernando Valley",
        services: [
            {
                day: "Sunday",
                time: "8:00 AM",
            },
            {
                day: "Sunday",
                time: "9:30 AM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/St._Catherine_of_Siena_Catholic_Church_Reseda.JPG",
        website: "https://www.scsparish.org/",
    },
    {
        name: "Santa Rosa Catholic Church",
        region: "San Fernando Valley",
        services: [
            {
                day: "Sunday",
                time: "6:30 AM",
            },
            {
                day: "Sunday",
                time: "8:00 AM",
            },
            {
                day: "Sunday",
                time: "9:30 AM",
            },
            {
                day: "Sunday",
                time: "11:00 AM",
            },
            {
                day: "Sunday",
                time: "12:30 PM",
            },
            {
                day: "Sunday",
                time: "2:00 PM",
            },
            {
                day: "Sunday",
                time: "3:30 PM",
            },
            {
                day: "Sunday",
                time: "5:00 PM"
            },
            {
                day: "Saturday",
                time: "6:30 PM",
            },
            {
                day: "Monday",
                time: "7:00 PM",
            },
            {
                day: "Monday",
                time: "8:00 PM",
            },
            {
                day: "Tuesday-Friday",
                time: "7:00 PM",
            },
            {
                day: "Saturday",
                time: "8:00 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://d3asryxs3chhp9.cloudfront.net/data/4164/thumbnails/large/43d8473c04.jpg",
        website: "https://santarosachurchsf.org/",
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
                day: "Monday-Friday",
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
                day: "Monday-Friday",
                time: "7:00 AM",
            },
            {
                day: "Monday-Friday",
                time: "12:10 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://rafaelmoneo.com/wp/wp-content/uploads/2016/10/0620-09Fweb.jpg",
        website: "https://olacathedral.org/mass-schedule",
    },
    {
        name: "Greater New Bethel Baptist Church",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "9:30 AM",
            },
            {
                day: "Sunday",
                time: "10:45 AM",
            },
        ],
        languages: ["English"],
        image: "https://i3.ypcdn.com/blob/7be3cfbc2d16b07537057e49f837293952a221f2",
        website: "https://www.greaternewbethelbaptistchurch.org/?gad_source=1&gclid=Cj4KCQjwztOwBhD7ARItAPDKnkCNX8Fyg7bZezBa99cl8rBq5j3girCzkE_bQEU0j1DF3oB44Z4xtI0gGgIgGxAC8P8HAQ",
    },
    {
        name: "InsideOut Church Los Angeles",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://images.squarespace-cdn.com/content/v1/63bda4e8e2456a1563bb1204/f866157f-c91d-41a6-9088-d149344d4ef9/2.jpg",
        website: "https://www.insideoutla.org/",
    },
    {
        name: "First Congregational Church of Los Angeles",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "10:15 AM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5EgVQ449i0NROpPSb8nx9H0m-jZ8sfM-_qKjz_tqCw&s",
        website: "https://www.fccla.org/visit",
    },
    {
        name: "Core Church LA",
        region: "Central Los Angeles",
        services: [
            {
                day: "Sunday",
                time: "8:30 AM",
            },
            {
                day: "Sunday",
                time: "10:30 AM",
            },
            {
                day: "Sunday",
                time: "12:30 PM",
            },
            {
                day: "Thursdays",
                time: "7:30 PM",
            },
        ],
        languages: ["English"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-OXPifbuTEI4RKalfhcJY0CYjbb-2tFak1vBAszFFw&s",
        website: "https://www.corechurchla.org/",
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
                day: "Sunday",
                time: "9:00 AM",
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
                day: "Sunday",
                time: "11:00 AM",
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
    {
        name: "University Bible Church",
        region: "Westside",
        services: [
            {
                day: "Sunday",
                time: "11:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/UHQYjTBPcLSpxhaRhtKG8Q/348s.jpg",
        website: "https://www.universitybiblechurch.com/ubc-sunday-schedule/",
    },
    {
        name: "The Commons LA Church",
        region: "Westside",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
        ],
        languages: ["English"],
        image: "https://images.squarespace-cdn.com/content/v1/593f2d7e893fc090cfb564eb/1534803065963-F1D6MS55Z9SUG2UQYLZ3/TCLAeaster2018-23.jpg",
        website: "https://www.thecommonsla.com/#home-1",
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
                day: "Monday-Saturday",
                time: "8:00 AM",
            },
            {
                day: "Monday-Saturday",
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
        image: "https://lh3.googleusercontent.com/p/AF1QipMo4hXSTjQMp_C8aTD5H_0Lb5hSz1fi67lV2-SY=s680-w680-h510",
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
                day: "Sunday",
                time: "9:00 AM",
            },
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "4:30 PM",
            },
            {
                day: "Monday",
                time: "11:30 AM",
            },
            {
                day: "Tuesday",
                time: "11:30 AM",
            },
            {
                day: "Thursday",
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
    {
        name: "NorthPark Community Church",
        region: "Santa Clarita",
        services: [
            {
                day: "Sunday",
                time: "10:30 AM",
            },
        ],
        languages: ["English"],
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/xffAxcWbvQcPDKdGJFX-SA/348s.jpg",
        website: "https://www.northpark.com/",
    },
    {
        name: "Real Life Church Valencia",
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
            {
                day: "Thursdays",
                time: "7:00 PM",
            },
        ],
        languages: ["English"],
        image: "https://reallifechurch.org/wp-content/uploads/Valencia_Campus_Building.jpg",
        website: "https://reallifechurch.org/",
    },
    {
        name: "Village Church",
        region: "Santa Clarita",
        services: [
            {
                day: "Sunday",
                time: "10:00 AM",
            },
            {
                day: "Sunday",
                time: "10:45 AM",
            },
            {
                day: "Sunday",
                time: "2:00 PM",
            },
        ],
        languages: ["English", "Spanish"],
        image: "https://wp.thevillagechurch.org/wp-content/uploads/2019/09/village_church.png",
        website: "https://thevillagechurch.org/",
    },
];

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    // Loops through each element in the churches array to make a card for each one
    for (let i = 0; i < churches.length; i++) {
        let church = churches[i];

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, church.name, church.image, church.region, 
                        church.services, church.languages, church.website);
        cardContainer.appendChild(nextCard);
    }
}

// This function edits the content of the card based off of new data
function editCardContent(card, newTitle, newImageURL, newRegion, 
    newServices, newLanguages, newWebsite) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    const link = cardHeader.querySelector("a");
    link.textContent = newTitle;
    link.href = newWebsite;
    link.target = "_blank";

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = "Image Coming Soon";

    const cardRegion = card.querySelector(".region");
    cardRegion.textContent = "Region: " + newRegion;

    const serviceList = card.querySelector(".service-list");
    serviceList.innerHTML = ""; 

    // Loop through the services array and add each service as a bullet point
    newServices.forEach(newServices => {
    const serviceItem = document.createElement("li");
    serviceItem.textContent = `${newServices.day}, ${newServices.time}`;
    serviceList.appendChild(serviceItem);
});

// Concatenate elements in languages array to create one string with all languages
const languageList = card.querySelector(".language-list");
languageList.innerHTML = "";
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

    // Loops through the regions array to create a button for each one
    regions.forEach(region => {
        const button = createFilterButton(region);
        filterButtonsContainer.appendChild(button);
    });
}

// Helper function to get unique regions from the churches array
function getUniqueRegions(churches) {
    const regions = new Set(); // a set stores unique, individual items (useful for retrieving unique regions)
    churches.forEach(church => regions.add(church.region)); 
    return Array.from(regions); // making a new array to return (because arrays are used in showFilterButtons() function)
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

    // Loop through each filter button to add event listeners to each one
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
    const blueprintCardIndex = cards.length - 1;

    // Loops through each card and check if it's appropriate to show based on filters
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


// This function adds an event listener to the search input field
function addSearchEventListener() {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchByName);
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchByName();
        }
    });
}

// This function takes in the search query and displays the appropriate card(s)
function searchByName() {
    const searchInput = document.getElementById("searchInput");
    const searchQuery = searchInput.value.toLowerCase(); 
    
    const cards = document.querySelectorAll('.card');
    const blueprintCardIndex = cards.length - 1; 

    // Loops through each card and checks to see if it should be displayed
    cards.forEach((card, index) => {
        const cardTitle = card.querySelector('h2').textContent.toLowerCase();

        if (index === blueprintCardIndex) {
            card.style.display = 'none';
        } else if (searchQuery === '' || cardTitle.includes(searchQuery)) {
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
