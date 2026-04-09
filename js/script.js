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

/* HOMEPAGE SPOTLIGHT DATA */
const spotlightCarousel = document.getElementById("spotlightCarousel");
const spotlightDots = document.getElementById("spotlightDots");
const spotlightPrev = document.getElementById("spotlightPrev");
const spotlightNext = document.getElementById("spotlightNext");

if (spotlightCarousel && spotlightDots && spotlightPrev && spotlightNext) {
  const spotlightResources = [
    {
      title: "Animal Shelter Volunteer",
      org: "Fort Worth Animal Care & Control",
      description:
        "Support pet care, donation organization, and community adoption events through local volunteer service.",
      image: "images/animal-shelter.jpg",
      tags: ["Volunteer", "Community Service"],
      link: "volunteer.html",
      buttonText: "Learn More"
    },
    {
      title: "Storytime & Early Learning",
      org: "Fort Worth Public Library",
      description:
        "A literacy-centered program for younger students with stories, crafts, and early learning activities.",
      image: "images/library-storytime.jpg",
      tags: ["Program", "Elementary"],
      link: "prog.html",
      buttonText: "Learn More"
    },
    {
      title: "Leaves Book and Tea Shop",
      org: "Near Southside Local Favorite",
      description:
        "A cozy local business that combines books, tea, and community atmosphere in Fort Worth.",
      image: "images/bookstore-tea.jpg",
      tags: ["Business", "Local Favorite"],
      link: "business.html",
      buttonText: "Learn More"
    },
    {
      title: "Fort Worth Fourth",
      org: "Citywide Community Event",
      description:
        "One of Fort Worth’s major annual celebrations with family-friendly activities and community spirit.",
      image: "images/fortworth-fourth.jpg",
      tags: ["Event", "Family-Friendly"],
      link: "events.html",
      buttonText: "Learn More"
    }
  ];

  let spotlightIndex = 0;

  function getCardsPerView() {
    if (window.innerWidth <= 700) return 1;
    if (window.innerWidth <= 980) return 2;
    return 3;
  }

  function renderSpotlight() {
    const cardsPerView = getCardsPerView();
    spotlightCarousel.innerHTML = "";
    spotlightDots.innerHTML = "";

    for (let i = 0; i < cardsPerView; i++) {
      const item = spotlightResources[(spotlightIndex + i) % spotlightResources.length];

      const card = document.createElement("article");
      card.className = "home-spotlight-card";

      const tagsHTML = item.tags
        .map(tag => `<span class="home-spotlight-chip">${tag}</span>`)
        .join("");

      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="home-spotlight-content">
          <div class="home-spotlight-top">${tagsHTML}</div>
          <h3>${item.title}</h3>
          <p class="home-spotlight-org">${item.org}</p>
          <p>${item.description}</p>
          <div class="home-spotlight-actions">
            <a class="home-spotlight-link primary" href="${item.link}">${item.buttonText}</a>
          </div>
        </div>
      `;

      spotlightCarousel.appendChild(card);
    }

    spotlightResources.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = `spotlight-dot ${index === spotlightIndex ? "active" : ""}`;
      dot.setAttribute("aria-label", `Go to spotlight ${index + 1}`);
      dot.addEventListener("click", () => {
        spotlightIndex = index;
        renderSpotlight();
      });
      spotlightDots.appendChild(dot);
    });
  }

  spotlightPrev.addEventListener("click", () => {
    spotlightIndex =
      (spotlightIndex - 1 + spotlightResources.length) % spotlightResources.length;
    renderSpotlight();
  });

  spotlightNext.addEventListener("click", () => {
    spotlightIndex = (spotlightIndex + 1) % spotlightResources.length;
    renderSpotlight();
  });

  window.addEventListener("resize", renderSpotlight);

  renderSpotlight();
}