// Mic efect la scroll
window.addEventListener('scroll', () => {
    document.body.style.opacity = 1 - (window.scrollY / 800);
});
