const businesses = [
  {
    name: "Mariscos El Cachanilla",
    type: ["Food Truck", "Restaurant", "Local Favorite"],
    description:
      "Authentic Baja-style mariscos served from a family-run Fort Worth spot known for fresh seafood and bold flavor.",
    neighborhood: "East Lancaster / Fort Worth",
    address: "4402 E Lancaster Ave, Fort Worth, TX 76103",
    image: "assets/placeholder.jpg",
    website: "https://www.facebook.com/mariscos.el.cachanillaa/",
    directions: "https://maps.google.com/?q=4402+E+Lancaster+Ave+Fort+Worth+TX+76103"
  },
  {
    name: "Big Dawgs Hot Dog Co.",
    type: ["Food Truck", "Restaurant", "Local Favorite"],
    description:
      "A Fort Worth favorite serving handcrafted gourmet hot dogs and street-food style specialties with big flavor.",
    neighborhood: "Fort Worth",
    address: "2836 Stanley Ave, Fort Worth, TX 76110",
    image: "assets/placeholder.jpg",
    website: "https://bigdawgsdfw.com/",
    directions: "https://maps.google.com/?q=2836+Stanley+Ave+Fort+Worth+TX+76110"
  },
  {
    name: "Danibelle's Lebanese Cuisine",
    type: ["Food Truck", "Restaurant"],
    description:
      "A Lebanese food truck serving Mediterranean-inspired dishes across the Dallas–Fort Worth area.",
    neighborhood: "DFW / Fort Worth area",
    address: "See vendor page for current schedule",
    image: "assets/placeholder.jpg",
    website: "https://roaminghunger.com/danibelles-lebanese-cuisine/",
    directions: "https://roaminghunger.com/danibelles-lebanese-cuisine/"
  },
  {
    name: "Leaves Book and Tea Shop",
    type: ["Bookstore", "Tea House", "Local Favorite"],
    description:
      "A cozy Near Southside space combining books, tea, and bakery offerings in a relaxed community setting.",
    neighborhood: "Near Southside",
    address: "120 Saint Louis Ave, Suite 101, Fort Worth, TX 76104",
    image: "assets/placeholder.jpg",
    website: "https://leaves-bakery-and-books.company.site/",
    directions: "https://maps.google.com/?q=120+Saint+Louis+Ave+Suite+101+Fort+Worth+TX+76104"
  }
];

const businessList = document.getElementById("businessList");
const businessSearch = document.getElementById("businessSearch");
const businessTags = document.querySelectorAll(".business-tag");
const businessCount = document.getElementById("businessCount");
const businessEmpty = document.getElementById("businessEmpty");

let activeBusinessFilter = "all";

function renderBusinesses() {
  const searchTerm = businessSearch.value.trim().toLowerCase();

  const filtered = businesses.filter((business) => {
    const tagText = business.type.join(" ").toLowerCase();
    const combined = [
      business.name,
      business.description,
      business.neighborhood,
      business.address,
      tagText
    ].join(" ").toLowerCase();

    const matchesSearch = combined.includes(searchTerm);
    const matchesFilter =
      activeBusinessFilter === "all" ||
      tagText.includes(activeBusinessFilter);

    return matchesSearch && matchesFilter;
  });

  businessList.innerHTML = "";

  filtered.forEach((business, index) => {
    const card = document.createElement("article");
    card.className = `business-card ${index % 2 === 1 ? "reverse" : ""}`;

    const tagsHTML = business.type
      .map((tag) => `<span class="business-chip">${tag}</span>`)
      .join("");

    const imageBlock = `
      <div class="business-image-wrap">
        <img src="${business.image}" alt="${business.name}" />
      </div>
    `;

    const contentBlock = `
      <div class="business-content">
        <div class="business-top">${tagsHTML}</div>
        <h2 class="business-title">${business.name}</h2>
        <p class="business-desc">${business.description}</p>

        <div class="business-meta">
          <span><i class="fa-solid fa-location-dot"></i> ${business.neighborhood}</span>
          <span><i class="fa-regular fa-map"></i> ${business.address}</span>
        </div>

        <div class="business-actions">
          <a class="business-link primary" href="${business.website}" target="_blank" rel="noreferrer">
            Visit Site
          </a>
          <a class="business-link secondary" href="${business.directions}" target="_blank" rel="noreferrer">
            Show Directions
          </a>
        </div>
      </div>
    `;

    card.innerHTML =
      index % 2 === 1
        ? `${contentBlock}${imageBlock}`
        : `${imageBlock}${contentBlock}`;

    businessList.appendChild(card);
  });

  businessCount.textContent = `Showing ${filtered.length} business${filtered.length === 1 ? "" : "es"}`;
  businessEmpty.classList.toggle("hidden", filtered.length !== 0);
}

businessSearch.addEventListener("input", renderBusinesses);

businessTags.forEach((button) => {
  button.addEventListener("click", () => {
    businessTags.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeBusinessFilter = button.dataset.filter.toLowerCase();
    renderBusinesses();
  });
});

renderBusinesses();