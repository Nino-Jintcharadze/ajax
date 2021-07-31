let navbar = document.getElementById('nav');
let burger = document.getElementById('bar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
})