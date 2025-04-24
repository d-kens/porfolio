// Binary Rain Animation
const canvas = document.getElementById('binaryRain');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Binary rain characters
const binaryChars = '01';
const columns = Math.floor(canvas.width / 20);
const drops = [];

// Initialize drops
for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height);
}

function drawBinaryRain() {
    // Add semi-transparent black background
    ctx.fillStyle = 'rgba(26, 26, 46, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the binary characters
    ctx.fillStyle = '#4ade80';
    ctx.font = '15px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        // Get random binary character
        const text = binaryChars.charAt(Math.floor(Math.random() * binaryChars.length));
        
        // Draw the character
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        // Move drop
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        
        drops[i]++;
    }
}

// Animate
setInterval(drawBinaryRain, 100);

// Simulate typing in terminal
const commands = [
    'ls -la',
    'npm start',
    'node server.js',
    'git commit -m "Update API"'
];

let currentCommandIndex = 0;
const typingCommand = document.getElementById('typing-command');

function typeCommand() {
    const command = commands[currentCommandIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
        if (charIndex < command.length) {
            typingCommand.textContent = command.substring(0, charIndex + 1) + '_';
            charIndex++;
        } else {
            clearInterval(typeInterval);
            setTimeout(() => {
                typingCommand.textContent = '_';
                currentCommandIndex = (currentCommandIndex + 1) % commands.length;
                setTimeout(typeCommand, 500);
            }, 1000);
        }
    }, 100);
}

setTimeout(typeCommand, 1000);

// Create circuit nodes dynamically
function createCircuitNodes() {
    const circuitContainer = document.querySelector('#hero');
    const nodeCount = 15;
    
    for (let i = 0; i < nodeCount; i++) {
        const node = document.createElement('div');
        node.className = 'circuit-node';
        
        // Random position
        const x = Math.floor(Math.random() * 80) + 10; // 10% to 90%
        const y = Math.floor(Math.random() * 80) + 10; // 10% to 90%
        
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.style.opacity = Math.random() * 0.5 + 0.2;
        
        // Pulse animation
        const animationDuration = Math.floor(Math.random() * 5) + 2;
        node.style.animation = `pulse ${animationDuration}s infinite alternate`;
        
        circuitContainer.appendChild(node);
    }
}

createCircuitNodes();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



  // Project Carousel
  const carousel = document.getElementById('projectCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const items = document.querySelectorAll('.carousel-item');
  
  let currentIndex = 0;
  
  function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
  });
  
  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
  });

