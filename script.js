
// STUTI JAIN PORTFOLIO
// Theme toggle, mobile navigation, scroll animations

const body = document.body;

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");

// RESTORE PREVIOUS THEME
// Default theme is dark.

const savedTheme = localStorage.getItem("stuti-portfolio-theme");

if (savedTheme === "light") {
  body.classList.add("light");
}

// UPDATE THEME BUTTON

function updateThemeButton() {
  const isLight = body.classList.contains("light");

  themeToggle.innerHTML = isLight
    ? '<i data-lucide="moon"></i><span>Dark mode</span>'
    : '<i data-lucide="sun"></i><span>Light mode</span>';

  if (window.lucide) {
    lucide.createIcons();
  }
}

updateThemeButton();

// THEME TOGGLE

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  localStorage.setItem(
    "stuti-portfolio-theme",
    body.classList.contains("light") ? "light" : "dark"
  );

  updateThemeButton();
});

// MOBILE NAVIGATION

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.innerHTML = isOpen
    ? '<i data-lucide="x"></i>'
    : '<i data-lucide="menu"></i>';

  if (window.lucide) {
    lucide.createIcons();
  }
});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.innerHTML = '<i data-lucide="menu"></i>';

    if (window.lucide) {
      lucide.createIcons();
    }
  });
});

// SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});

// BACK TO TOP BUTTON

window.addEventListener("scroll", () => {
  backTop.classList.toggle("visible", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// AUTOMATIC CURRENT YEAR

document.getElementById("year").textContent =
  new Date().getFullYear();

// LOAD LUCIDE ICONS

if (window.lucide) {
  lucide.createIcons();
}
