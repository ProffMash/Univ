/*let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
document.addEventListener('DOMContentLoaded', function () {
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('header .navbar');

    menuBar.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
}); */


document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu-bar');
    const navbar = document.querySelector('header .navbar');

    menu.addEventListener('click', function () {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        // Check if the screen width is less than 768px after resizing
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
            menu.classList.remove('fa-times');
        }
    });
});

