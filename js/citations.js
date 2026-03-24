const filterButtons = document.querySelectorAll(".ref-filter");
const referenceEntries = document.querySelectorAll(".reference-entry");

let activeReferenceFilter = "all";

function renderReferenceFilter() {
  referenceEntries.forEach((entry) => {
    const category = entry.dataset.category;

    if (activeReferenceFilter === "all" || category === activeReferenceFilter) {
      entry.classList.remove("hidden");
    } else {
      entry.classList.add("hidden");
    }
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeReferenceFilter = button.dataset.filter;
    renderReferenceFilter();
  });
});

renderReferenceFilter();