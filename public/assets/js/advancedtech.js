
const mobileNavElements = document.querySelector('.mobile-nav-elements');
    const menuBarIcon = document.querySelector('.menu-bar-icon');

    menuBarIcon.addEventListener('click', function () {
      mobileNavElements.classList.toggle('active');
    });



// Base URL for the API
const base_url = "https://cms.vdtcomms.com";
// const base_url = "http://92.205.109.36:1337";

// API endpoints
const bitflux_advanced_url = "/api/bitflux-advanced-tech?populate=what_text,how_text,how_img,when_nigeria_text,how_fast_text,how_fast_img";

const bitflux_what_lte = document.getElementById("bitflux_what_lte");
const bitflux_how_lte = document.getElementById("bitflux_how_lte");
const bitflux_how_lte_img = document.getElementById("bitflux_how_lte_img");
const bitflux_lte_when_nigeria = document.getElementById("bitflux_lte_when_nigeria");
const bitflux_lte_how_fast = document.getElementById("bitflux_lte_how_fast");
const bitflux_lte_how_fast_img = document.getElementById("bitflux_lte_how_fast_img");


// Fetch the banner image
fetch(base_url+bitflux_advanced_url)
    .then(res => {
        return res.json();
    })
    .then(data => {

        const what_lte_text = data.data.attributes.what_text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        bitflux_what_lte.innerHTML = what_lte_text.replace(/\n/g, '<br>');
        
        const how_text = data.data.attributes.how_text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        bitflux_how_lte.innerHTML = how_text.replace(/\n/g, '<br>');

        bitflux_how_lte_img.src = base_url+data.data.attributes.how_img.data.attributes.url;

        const when_nigeria_text = data.data.attributes.when_nigeria_text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        bitflux_lte_when_nigeria.innerHTML = when_nigeria_text.replace(/\n/g, '<br>');

        const how_fast_text = data.data.attributes.how_fast_text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        bitflux_lte_how_fast.innerHTML = how_fast_text.replace(/\n/g, '<br>');

        bitflux_lte_how_fast_img.src = base_url+data.data.attributes.how_fast_img.data.attributes.url;

    });