document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-mode');
  const body = document.body;
  const starsCanvas = document.getElementById('stars');
  const ctx = starsCanvas.getContext('2d');

  function createStars() {
    starsCanvas.width = window.innerWidth;
    starsCanvas.height = window.innerHeight;
    const stars = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * starsCanvas.width,
        y: Math.random() * starsCanvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random()
      });
    }

    function drawStars() {
      ctx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      ctx.fillStyle = "white";
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      requestAnimationFrame(drawStars);
    }

    drawStars();
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      starsCanvas.style.display = 'block';
      createStars();
      toggleButton.textContent = '🌙';
    } else {
      starsCanvas.style.display = 'none';
      toggleButton.textContent = '☀️';
    }
  });
});