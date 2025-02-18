const loginNavIcons = document.querySelector('.login-icon');
const loginNavMenu = document.querySelector(".login-screen");

loginNavIcons.addEventListener('click', function () {
    loginNavMenu.classList.toggle("active");
});


const navIcons = document.querySelector(".dropbox") 
const navManu = document.querySelector(".header-nav")

navIcons.addEventListener('click', function () {
    navManu.classList.toggle("active");
});