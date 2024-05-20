
const mobileNavElements = document.querySelector('.mobile-nav-elements');
const menuBarIcon = document.querySelector('.menu-bar-icon');

menuBarIcon.addEventListener('click', function () {
  mobileNavElements.classList.toggle('active');
});

// Base URL for the API
const base_url = "https://cms.vdtcomms.com";

// API endpoints
const vdtcomms_devices_url = "/api/news-and-updates?populate=news_image";

// Document elements
vdtcomms_news_updates_section = document.getElementById("vdtcomms_news_updates_section");

// Fetch news and updates
fetch(base_url+vdtcomms_devices_url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        var allNews = data.data;    

        allNews.forEach(news => {
            console.log(base_url + news.attributes.news_image.data.attributes.url);

            let output = `
                <div class="news-blog-card">
                    <div class="news-blog-card-wrapper">
                        <div class="news-blog-img">
                            <img src=${base_url + news.attributes.news_image.data.attributes.url} alt="news-blog" />
                        </div>
                        <div class="news-blog-info">
                            <div class="blog-info-data">
                                <img src="/public/assets/icons/blog-user-icon.svg" alt="info"/>
                                <p>VDT Comm</p>
                            </div>
                            <div class="blog-info-data">
                                <img src="/public/assets/icons/blog-time-icon.svg" alt="info"/>
                                <p>${news.attributes.createdAt}</p>
                            </div>
                            <div class="blog-info-data">
                                <img src="/public/assets/icons/blog-comment-icon.svg" alt="info"/>
                                <p>No comment</p>
                            </div>
                            <div class="blog-info-data">
                                <img src="/public/assets/icons/blog-like-icon.svg" alt="info"/>
                                <p>${news.attributes.likes}</p>
                            </div>
                        </div>
        
                        <div class="news-blog-content">
                            <h1>${news.attributes.title}</h1>
                            <p>${news.attributes.short_description}</p>
                        </div>
                        <div class="news-blog-button">
                            <button onclick='loadNewsUpdate(${news.id})'>Read More</button>
                        </div>
                    </div>
                </div>


            `;            
            vdtcomms_news_updates_section.insertAdjacentHTML('beforeend', output);
        });
    })
    .catch(err => {
        console.log(err);
    });


// Load a single news update
function loadNewsUpdate(id) {
    console.log("You have clicked on news item: ", id);
    // window.location.href = "/news-and-updates/" + id;
}