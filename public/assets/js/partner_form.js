const mobileNavElements = document.querySelector('.mobile-nav-elements');
const menuBarIcon = document.querySelector('.menu-bar-icon');

menuBarIcon.addEventListener('click', function () {
  mobileNavElements.classList.toggle('active');
});


// redirects

function get_started() {
    location.href = "./our-services.html";
}


function become_partner() {
    location.href = "./partner-request-form.html";
}


// get current year
var d = new Date();
var n = d.getFullYear();
document.getElementById("c_right").innerHTML = "©" + n + " BitFlux. All Rights Reserved.";






// Base URL for the API
const base_url = "https://cms.vdtcomms.com";

// API endpoints
const bitflux_landing_url = "/api/bitflux?populate=hero_h1,hero_p";

// Document elements
const bitflux_hero_h1 = document.getElementById("bitflux_hero_h1");
const bitflux_hero_p = document.getElementById("bitflux_hero_p");


// Fetch the banner image
fetch(base_url+bitflux_landing_url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        bitflux_hero_h1.innerHTML = data.data.attributes.hero_h1;
        bitflux_hero_p.innerHTML = data.data.attributes.hero_p;

    });


// Function to update click variable on the backend
function registerClick(device_name) {
    console.log("User just clicked on device with ID:", device_name);
}


function redirectDataPlan(id, url) {
    console.log("User just clicked on data plan with ID:", id, " and redirect URL:", url);
}
