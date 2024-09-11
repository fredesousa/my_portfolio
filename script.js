// Smooth scrolling when clicking on links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
          top: targetElement.offsetTop - 60, // Ajuste pour la navbar
          behavior: 'smooth'
      });
  });
});

// Navbar hide on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-100px'; // Cache la navbar
  } else {
    // Scrolling up
    navbar.style.top = '0'; // Affiche la navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Pour éviter les valeurs négatives
});
