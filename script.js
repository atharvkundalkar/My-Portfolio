// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll-based animations
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.navbar a');
  
  // Add sticky header
  header.classList.toggle('sticky', window.scrollY > 100);
  
  // Add active class to nav links on scroll
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
  
  // Animate sections on scroll
  const animatedElements = document.querySelectorAll('.home-content, .home-img, .about-content, .skills-content, .projects-content, .contact form');
  
  animatedElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    
    if (elTop < screenHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(50px)';
    }
  });
});