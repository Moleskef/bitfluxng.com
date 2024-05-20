
const mobileNavElements = document.querySelector('.mobile-nav-elements');
    const menuBarIcon = document.querySelector('.menu-bar-icon');

    menuBarIcon.addEventListener('click', function () {
      mobileNavElements.classList.toggle('active');
    });


// Base URL for the API
const base_url = "https://cms.vdtcomms.com";

// API endpoints
const bitflux_services_url = "/api/bitflux-service?populate=why_we_standout_text,why_we_standout_img1,why_we_standout_img2";

// Document elements
const bitflux_why_we_standout_text = document.getElementById("bitflux_why_we_standout_text");
const bitflux_why_we_standout_img1 = document.getElementById("bitflux_why_we_standout_img1");
const bitflux_why_we_standout_img2 = document.getElementById("bitflux_why_we_standout_img2");


// fetch data from the API
fetch(base_url + bitflux_services_url)
    .then((response) => response.json())
    .then((data) => {
      const why_standout = data.data.attributes.why_we_standout_text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
      const why_standout3 = why_standout.replace(/\-\s(.*?)\n/g, '<li>$1</li>');
      bitflux_why_we_standout_text.innerHTML = why_standout3.replace(/\n/g, '<br>');

      bitflux_why_we_standout_img1.src = base_url + data.data.attributes.why_we_standout_img1.data.attributes.url;
      bitflux_why_we_standout_img2.src = base_url + data.data.attributes.why_we_standout_img2.data.attributes.url;
    })
    .catch((err) => {
        console.log(err);
    });   