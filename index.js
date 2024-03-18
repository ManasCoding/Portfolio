let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navbar');
const navbar = document.querySelector('.navbar-div');

menu.addEventListener("click", () => {
    navbar.style.display = "block";
    navbar.style.display = "flex";
    menu.classList.toggle('bx-x');
});

navlist.classList.toggle('open');

    