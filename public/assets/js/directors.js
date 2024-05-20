
const mobileNavElements = document.querySelector('.mobile-nav-elements');
    const menuBarIcon = document.querySelector('.menu-bar-icon');

    menuBarIcon.addEventListener('click', function () {
      mobileNavElements.classList.toggle('active');
    });