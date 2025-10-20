// Simple greeting popup
window.addEventListener('load', function() {
  alert("Welcome to Vudayagiri Navya's Portfolio! 👋");
});

// Change header color on click
const header = document.querySelector('header');
header.addEventListener('click', function() {
  header.style.backgroundColor = "#ff6584"; // changes color when clicked
});