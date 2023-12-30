const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.classList.toggle('hidden');
burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

