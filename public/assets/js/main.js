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
const bitflux_landing_url = "/api/bitflux?populate=banner_images,why_choose_us_img,why_choose_us_text,hero_h1,hero_p";
// const bitflux_devices_url = "/api/vdt-comms-devices?populate=device_image";
// const bitflux_data_plan_url = "/api/vdt-comms-data-plans";
// const register_click_url = "/api/vdt-comms-devices/register-click";

// Document elements
// const bitflux_devices_section = document.getElementById("bitflux_device_section");
// const bitflux_data_section = document.getElementById("bitflux_data_section");
// const bitflux_banner_section = document.getElementById("bitflux_banner_section");
const bitflux_why_choose_us_img = document.getElementById("bitflux_why_choose_us_img");
const bitflux_why_choose_us_text = document.getElementById("bitflux_why_choose_us_text");
const bitflux_hero_h1 = document.getElementById("bitflux_hero_h1");
const bitflux_hero_p = document.getElementById("bitflux_hero_p");

// Data plan details
// bitflux_plan_left_title = document.getElementById("bitflux_plan_left_title");
// bitflux_plan_left_validity = document.getElementById("bitflux_plan_left_validity");
// bitflux_plan_left_price = document.getElementById("bitflux_plan_left_price");
// bitflux_plan_left_onclick = document.getElementById("bitflux_plan_left_onclick");


// bitflux_plan_right_title = document.getElementById("bitflux_plan_right_title");
// bitflux_plan_right_validity = document.getElementById("bitflux_plan_right_validity");
// bitflux_plan_right_price = document.getElementById("bitflux_plan_right_price");
// bitflux_plan_right_onclick = document.getElementById("bitflux_plan_right_onclick");

// bitflux_plan_center_title = document.getElementById("bitflux_plan_center_title");
// bitflux_plan_center_validity = document.getElementById("bitflux_plan_center_validity");
// bitflux_plan_center_price = document.getElementById("bitflux_plan_center_price");
// bitflux_plan_center_onclick = document.getElementById("bitflux_plan_center_onclick");

// bitflux_plan_main_title = document.getElementById("bitflux_plan_main_title");
// bitflux_plan_main_validity = document.getElementById("bitflux_plan_main_validity");
// bitflux_plan_main_price = document.getElementById("bitflux_plan_main_price");
// bitflux_plan_main_onclick = document.getElementById("bitflux_plan_main_onclick");


// const data_plan_title = [bitflux_plan_main_title, bitflux_plan_left_title, bitflux_plan_right_title, bitflux_plan_center_title];
// const data_plan_validity = [bitflux_plan_main_validity, bitflux_plan_left_validity, bitflux_plan_right_validity, bitflux_plan_center_validity];
// const data_plan_price = [bitflux_plan_main_price, bitflux_plan_left_price, bitflux_plan_right_price, bitflux_plan_center_price];
// const data_plan_onclick = [bitflux_plan_main_onclick, bitflux_plan_left_onclick, bitflux_plan_right_onclick, bitflux_plan_center_onclick];


// Function to update click variable on the backend
function registerClick(device_name) {
    console.log("User just clicked on device with ID:", device_name);
    // api call to update click variable on backend
}



function redirectDataPlan(id, url) {
    console.log("User just clicked on data plan with ID:", id, " and redirect URL:", url);
    // api call to update click count on backend
    // window.location.href = url;
}








// Fetch the banner image
fetch(base_url+bitflux_landing_url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        const why_text = data.data.attributes.why_choose_us_text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
        
        // bitflux_banner_imgs.src = base_url+data.data.attributes.banner_imgs.data.attributes.url;
        bitflux_why_choose_us_img.src = base_url+data.data.attributes.why_choose_us_img.data.attributes.url;
        bitflux_why_choose_us_text.innerHTML = why_text.replace(/\n/g, '<br>');
        bitflux_hero_h1.innerHTML = data.data.attributes.hero_h1;
        bitflux_hero_p.innerHTML = data.data.attributes.hero_p;

    });





// Fetch devices
// fetch(base_url+bitflux_devices_url)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         var devices = data.data;    
        
//         devices.forEach(device => {
//             let output = `
//                 <div class="devices-card">
//                 <div class="devices-card-wrapper">
//                 <div class="devices-card-top">
//                     <img src="${base_url+device.attributes.device_image.data.attributes.url}" />
//                 </div>
//                 <div class="devices-card-bottom">
//                     <div class="devices-card-text">
//                     <h1>${device.attributes.name}</h1>
//                     <p>
//                         ${device.attributes.short_description}
//                     </p>
//                     </div>
//                     <div class="devices-card-button">
//                     <button onclick='registerClick(${device.id})'>Learn More</button>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         `;
        
//         bitflux_devices_section.insertAdjacentHTML('beforeend', output);

//         });
//     });





// Fetch data plans
// fetch(base_url+bitflux_data_plan_url)
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         var data_plans = data.data;
//         //console.log(data.meta.pagination.total); 

//         data_plans.forEach(function callback(data_plan, index) {
//             data_plan_title[index].innerHTML = data_plan.attributes.name;
//             data_plan_validity[index].innerHTML = 'Valid ' + data_plan.attributes.validity_days + " days";
//             data_plan_price[index].innerHTML = '₦' + data_plan.attributes.price.toLocaleString("en-US");
//             data_plan_onclick[index].setAttribute("onclick", "redirectDataPlan("+data_plan.id+", '"+data_plan.attributes.url+"')");

//         });

//         console.log(document.getElementById("bitflux_plan_left_title").innerHTML);
//         document.getElementById("bitflux_plan_left2_title").innerHTML = document.getElementById("bitflux_plan_left_title").innerHTML;
//         document.getElementById("bitflux_plan_left2_validity").innerHTML = document.getElementById("bitflux_plan_left_validity").innerHTML;
//         document.getElementById("bitflux_plan_left2_price").innerHTML = document.getElementById("bitflux_plan_left_price").innerHTML;

//     });



