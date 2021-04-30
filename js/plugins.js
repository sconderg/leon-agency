/* Navbar Toggler */
const btn = document.querySelector('.links .icon');
const nav = document.querySelector('.links ul');

btn.addEventListener('click', () => nav.classList.toggle('opened'));