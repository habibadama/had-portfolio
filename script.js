// HEADER SCROLL EFFECT
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// PROGRESS BAR ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".progress-bar").forEach((bar) => {
    const targetPercent = parseInt(bar.getAttribute("data-percent"), 10);

    const fill = document.createElement("div");
    fill.classList.add("progress-fill");
    fill.innerText = "0%";

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

// MENU TOGGLE
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav-list");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".nav-link");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    body.style.overflow = "hidden"; 
  } else {
    body.style.overflow = ""; 
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    body.style.overflow = "";
  });
});

// REVEAL ON SCROLL ANIMATION 
const elements = document.querySelectorAll(".reveal-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

elements.forEach((el) => observer.observe(el));
