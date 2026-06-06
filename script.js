const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const trackedLinks = Array.from(document.querySelectorAll(".nav-links a"));
const currentPage = window.location.pathname.split("/").pop() || "index.html";

trackedLinks.forEach((link) => {
  const linkPage = link.getAttribute("href").split("#")[0] || "index.html";
  const isCurrent = linkPage === currentPage;
  link.classList.toggle("is-active", isCurrent);
  if (isCurrent) {
    link.setAttribute("aria-current", "page");
  }
});

const trackedSections = trackedLinks
  .map((link) => link.getAttribute("href"))
  .filter((href) => href && href.startsWith("#"))
  .map((href) => document.querySelector(href))
  .filter(Boolean);

const updateHeader = () => {
  if (!header) return;
  header.toggleAttribute("data-scrolled", window.scrollY > 8);
};

if (trackedSections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        trackedLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-25% 0px -60% 0px", threshold: 0.01 }
  );

  trackedSections.forEach((section) => observer.observe(section));
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
