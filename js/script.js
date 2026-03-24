const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu = navLinks.contains(e.target);
  const clickedToggle = menuToggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navLinks.classList.remove("show");
  }
});

/* Optional: Close the menu when resizing the window */
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove("show");
  }
});


/* Volunteer Page */

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

document.addEventListener("click", (e) => {
  const clickedInsideMenu = navLinks.contains(e.target);
  const clickedToggle = menuToggle.contains(e.target);

  if (!clickedInsideMenu && !clickedToggle) {
    navLinks.classList.remove("show");
  }
});