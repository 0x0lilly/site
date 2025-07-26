// Email obfuscation and link setup
(function() {
  const user = 'relay';
  const domain = 'moonbay1.com';
  const link = document.getElementById('relay-link');
  const address = user + '@' + domain;
  link.href = 'mailto:' + address;
  link.textContent = address;
})();

// Create star field
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const numStars = 150;
  
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    
    // Random position
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    // Random size (1-3px)
    const size = Math.random() * 2 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // Random animation delay for variety
    star.style.animationDelay = Math.random() * 4 + 's';
    
    starsContainer.appendChild(star);
  }
}

// Initialize stars when page loads
createStars();

// Random quote logic
const quotes = [
  "The right to be let alone is the most comprehensive of rights. — Louis Brandeis",
  "Privacy is freedom. — Unknown",
  "Arguing against privacy is like saying you don't care about free speech. — Edward Snowden",
  "The less they know, the better you sleep. — Unknown",
  "You are not the product. — A wishful thinker"
];

document.getElementById('quote').innerText =
  quotes[Math.floor(Math.random() * quotes.length)];

// Easter egg toggle
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === '.') {
    const secret = document.getElementById('secret');
    secret.style.display = secret.style.display === 'block' ? 'none' : 'block';
  }
}); 