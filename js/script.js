// Mobile menu toggle for nav
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-image");
  const navLinks = document.querySelector(".nav-links");

  if (!menu || !navLinks) return;

  const toggleNav = () => navLinks.classList.toggle("open");

  menu.addEventListener("click", toggleNav);

  // allow keyboard activation (Enter or Space)
  menu.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleNav();
    }
  });

  // close nav when a link is clicked (mobile behavior)
  navLinks
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("open"))
    );

  // optional: close the menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menu.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
});
