// Function to dynamically load content into the 'content' div
function loadContent(page) {
  let contentDiv = document.getElementById('content');

  // Dynamically load content based on the page clicked
  if (page === 'home') {
    contentDiv.innerHTML = '<h1>Welcome to Home Page</h1><p>This is the home page content.</p>';
  } else if (page === 'about') {
    contentDiv.innerHTML = '<h1>About Us</h1><p>This is the about page content.</p>';
  } else if (page === 'services') {
    contentDiv.innerHTML = '<h1>Our Services</h1><p>This is the services page content.</p>';
  } else if (page === 'contact') {
    contentDiv.innerHTML = '<h1>Contact Us</h1><p>This is the contact page content.</p>';
  }
}
