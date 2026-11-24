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
