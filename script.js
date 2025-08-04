window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


 document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const targetPercent = parseInt(bar.getAttribute('data-percent'), 10);

      const fill = document.createElement('div');
      fill.classList.add('progress-fill');
      fill.innerText = '0%'; // texte initial

      bar.appendChild(fill);

      // Lancer l'animation après un court délai
      setTimeout(() => {
        fill.style.width = `${targetPercent}%`;

        let current = 0;
        const steps = 50;
        const duration = 1000;
        const increment = targetPercent / steps;
        const interval = duration / steps;

        const counter = setInterval(() => {
          current += increment;
          if (current >= targetPercent) {
            current = targetPercent;
            clearInterval(counter);
          }
          fill.innerText = `${Math.round(current)}%`;
        }, interval);
      }, 200);
    });
  });
