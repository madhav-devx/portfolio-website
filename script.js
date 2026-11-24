const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
const backToTop = document.getElementById("backToTop");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Replace the demo link with your deployed project URL before publishing.
document.querySelector(".demo-link").addEventListener("click", (event) => {
  event.preventDefault();
  alert("Add your live project URL to this button in index.html.");
});


// Animated Skills Progress Bars

const skillSection = document.querySelector("#skills");

if (skillSection) {
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBars = skillSection.querySelectorAll(".skill-progress");

        skillBars.forEach((bar) => {
          bar.style.setProperty("--skill-level", bar.dataset.level);
          bar.classList.add("animate");
        });

        skillObserver.unobserve(skillSection);
      }
    });
  }, {
    threshold: 0.3
  });

  skillObserver.observe(skillSection);
}
