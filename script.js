// Toggle mobile menu
const toggleMenu = () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
};

document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Send form data to server here

  alert(`Thank you for your message, ${name}!`);
});

// Add rounded cubes to projects section
const projectsSection = document.getElementById('projects');
const projectElements = projectsSection.querySelectorAll('.project');

projectElements.forEach(project => {
  project.innerHTML += '<div class="cube"></div>';
});

// Add rounded cubes to contact section
const contactSection = document.getElementById('contact');
contactSection.innerHTML += '<div class="cube"></div>';
