const menuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
        
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});
        
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
        
const servicesBtn = document.getElementById('services-btn');
const servicesBtn2 = document.getElementById('services-btn-2');
const servicesModal = document.getElementById('services-modal');
const closeModal = document.querySelector('.close-modal');
        
[servicesBtn, servicesBtn2].forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        servicesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});
        
closeModal.addEventListener('click', () => {
    servicesModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});
        
servicesModal.addEventListener('click', (e) => {
    if (e.target === servicesModal) {
        servicesModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
        
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('id') === 'services-btn') return;
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});