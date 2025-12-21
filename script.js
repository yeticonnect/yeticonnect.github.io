document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll(".reveal");
  
  const observer = new IntersectionObserver(
  (entries) => {
      entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
          setTimeout(() => {
          entry.target.classList.add("active");
          }, index * 100); // stagger effect
          observer.unobserve(entry.target);
      }
      });
  },
  { threshold: 0.15 }
  );
  
  reveals.forEach(el => observer.observe(el));
});
