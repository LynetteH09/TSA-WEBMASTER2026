// Fort Worth, TX Resource Directory 

const resources = [
  {
    name: "Tarrant Area Food Bank",
    category: "Food Assistance",
    featured: true,
    description: "Food distribution network serving Tarrant County. Use their Find Food tool to locate pantries and distribution sites.",
    address: "2525 Cullen St., Fort Worth, TX 76107",
    phone: "817-857-7100",
    website: "https://tafb.org/",
    image: "assets/dir-food.jpg",
    services: ["Food pantry referrals", "Food distribution", "Find Food map"]
  },
  {
    name: "Union Gospel Mission of Tarrant County",
    category: "Housing & Shelter",
    featured: true,
    description: "Emergency shelter and support services; community assistance and outreach programs.",
    address: "1321 E Lancaster Ave, Fort Worth, TX 76102",
    phone: "817-339-2553",
    website: "https://ugm-tc.org/",
    image: "assets/dir-shelter.jpg",
    services: ["Emergency shelter", "Meals", "Support services"]
  },
  {
    name: "Catholic Charities Fort Worth",
    category: "Family Support",
    featured: true,
    description: "Holistic services to help individuals and families build stability, including multiple support pathways.",
    address: "249 W Thornhill Dr., Fort Worth, TX 76115",
    phone: "817-534-0814",
    website: "https://catholiccharitiesfortworth.org/",
    image: "assets/dir-family.jpg",
    services: ["Family support", "Case management", "Stability resources"]
  },
  {
    name: "MHMR of Tarrant County (My Health My Resources)",
    category: "Mental Health",
    featured: false,
    description: "Mental health and IDD services. Crisis line available for immediate support.",
    address: "Fort Worth service locations available (see website)",
    phone: "817-335-3022 (Services) / 800-866-2465 (Crisis)",
    website: "https://mhmrtarrant.org/",
    image: "assets/dir-mentalhealth.jpg",
    services: ["Mental health services", "Crisis support", "Referrals"]
  },
  {
    name: "Presbyterian Night Shelter (Journey Home)",
    category: "Housing & Shelter",
    featured: false,
    description: "Support for people experiencing homelessness, including programs and connections to resources.",
    address: "2400 Cypress St, Fort Worth, TX 76102",
    phone: "817-632-7400",
    website: "https://www.journeyhome.org/",
    image: "assets/dir-housing.jpg",
    services: ["Shelter services", "Resource connection", "Support programs"]
  },
  {
    name: "Fort Worth Housing Solutions",
    category: "Housing Support",
    featured: false,
    description: "Public housing and housing assistance programs in Fort Worth.",
    address: "1407 Texas St, Fort Worth, TX 76102",
    phone: "817-333-3400",
    website: "https://fwhs.org/",
    image: "assets/dir-publichousing.jpg",
    services: ["Public housing", "Housing assistance", "Resident services"]
  },
  {
    name: "Workforce Solutions for Tarrant County",
    category: "Employment",
    featured: false,
    description: "Career services, job search support, and workforce resources for Tarrant County.",
    address: "1400 Circle Dr, Fort Worth, TX 76119",
    phone: "817-413-4000",
    website: "https://workforcesolutions.net/",
    image: "assets/dir-employment.jpg",
    services: ["Job search", "Career counseling", "Workforce centers"]
  },
  {
    name: "Goodwill North Central Texas",
    category: "Employment",
    featured: false,
    description: "Job training and employment support programs plus community services in North Central Texas.",
    address: "4200 Airport Fwy, Fort Worth, TX 76117",
    phone: "817-332-7866",
    website: "https://goodwillnorthcentraltexas.org/",
    image: "assets/dir-goodwill.jpg",
    services: ["Job training", "Employment support", "Community programs"]
  },
  {
    name: "JPS Health Network",
    category: "Healthcare",
    featured: true,
    description: "Public health system providing healthcare services, clinics, and patient support resources.",
    address: "1500 S Main St, Fort Worth, TX 76104",
    phone: "817-702-3431",
    website: "https://www.jpshealthnet.org/",
    image: "assets/dir-health.jpg",
    services: ["Healthcare services", "Clinics", "Patient support"]
  },
  {
    name: "Tarrant County Public Health (Call Center / WIC)",
    category: "Healthcare",
    featured: false,
    description: "Public health information and appointments. WIC services available through Tarrant County.",
    address: "Multiple locations (see website)",
    phone: "817-248-6299 (Call Center) / 817-321-5400 (WIC)",
    website: "https://www.tarrantcountytx.gov/en/public-health.html",
    image: "assets/dir-publichealth.jpg",
    services: ["Public health info", "Appointments", "WIC"]
  },
  {
    name: "Fort Worth Public Library (Job Skills Resources)",
    category: "Education",
    featured: false,
    description: "Workforce and job skill resources, including tools and classes across library locations.",
    address: "Multiple library locations in Fort Worth",
    phone: "See location directory on website",
    website: "https://www.fortworthtexas.gov/departments/library/programs/job-skills",
    image: "assets/dir-library.jpg",
    services: ["Job skills", "Workforce prep", "Learning tools"]
  }
];

const grid = document.getElementById("resourceGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const resultsCount = document.getElementById("resultsCount");

function uniqueCategories(items) {
  return ["All", ...Array.from(new Set(items.map(r => r.category))).sort()];
}

function buildCategoryOptions() {
  const cats = uniqueCategories(resources);
  categorySelect.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join("");
}

function matchesSearch(resource, query) {
  if (!query) return true;
  const q = query.toLowerCase();

  const haystack = [
    resource.name,
    resource.category,
    resource.description,
    resource.address,
    resource.phone,
    ...(resource.services || [])
  ].join(" ").toLowerCase();

  return haystack.includes(q);
}

function matchesCategory(resource, category) {
  if (category === "All") return true;
  return resource.category === category;
}

function render(items) {
  resultsCount.textContent = `Showing ${items.length} of ${resources.length} resources`;

  grid.innerHTML = items.map(r => `
    <article class="resource-card">
      <img class="resource-img" src="${r.image}" alt="${r.name}">
      <div class="resource-body">
        <div class="resource-top">
          <div class="resource-title">${r.name}</div>
          ${r.featured ? `<span class="badge-featured">Featured</span>` : ``}
        </div>

        <span class="category-pill">${r.category}</span>

        <p class="resource-desc">${r.description}</p>

        <ul class="resource-meta">
          <li><strong>Address:</strong> ${r.address}</li>
          <li><strong>Phone:</strong> ${r.phone}</li>
        </ul>

        <div class="resource-actions">
          <a href="${r.website}" target="_blank" rel="noreferrer">Website</a>
          <a href="mailto:?subject=${encodeURIComponent(r.name)}&body=${encodeURIComponent(r.website)}">Email</a>
        </div>
      </div>
    </article>
  `).join("");
}

function applyFilters() {
  const q = searchInput.value.trim();
  const cat = categorySelect.value;

  const filtered = resources.filter(r =>
    matchesSearch(r, q) && matchesCategory(r, cat)
  );

  render(filtered);
}

buildCategoryOptions();
render(resources);

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);