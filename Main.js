// Hamburger Menu

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
  overlay.classList.toggle('active');
});

// Multiple Text
const typed = new Typed('.multiple', {
  strings: ['Developer.', 'Youtuber.', 'Freelancer.'],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});


