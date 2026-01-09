/**
 * Scroll Reveal Animations for Portfolio Website
 */

document.addEventListener("DOMContentLoaded", () => {
  // Select all sections to animate
  const sections = document.querySelectorAll("section");

  // Add initial reveal classes based on layout
  sections.forEach((section, index) => {
    section.classList.add("reveal");

    // Alternate directions for a more dynamic feel
    if (index % 2 === 0) {
      section.classList.add("reveal-left");
    } else {
      section.classList.add("reveal-right");
    }

    // Specific overrides for better aesthetics
    if (section.id === "header") {
      section.classList.remove("reveal-left", "reveal-right");
      section.classList.add("reveal-bottom");
    }

    if (section.id === "skills") {
      section.classList.remove("reveal-left", "reveal-right");
      section.classList.add("reveal-scale");
    }
  });

  // Observer options
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  // Create the observer
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Stop observing once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  // Start observing each section
  sections.forEach(section => {
    revealObserver.observe(section);
  });

  // Smooth reveal for individual project boxes with delay
  const projectBoxes = document.querySelectorAll(".animation-box");
  projectBoxes.forEach((box, index) => {
    box.style.transitionDelay = `${(index % 3) * 0.15}s`;
    box.classList.add("reveal", "reveal-bottom");
    revealObserver.observe(box);
  });
});
