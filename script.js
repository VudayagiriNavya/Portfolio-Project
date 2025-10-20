// Simple greeting popup
window.addEventListener('load', function() {
  alert("Welcome to Vudayagiri Navya's Portfolio! 👋");
});

// Change header color on click
const header = document.querySelector('header');
header.addEventListener('click', function() {
  header.style.backgroundColor = "#ff6584"; // changes color when clicked
});
//Smooth scroll to sections (if you have navigation links)
const links = document.querySelectorAll('a[href^="#"]');

for (let link of links) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
}
//Hover effect on project cards
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = "#e0d4ff";
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = "#f0f0f0";
  });
});