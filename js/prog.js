const searchInput = document.getElementById("searchInput");
const tagButtons = document.querySelectorAll(".tag-btn");
const cards = document.querySelectorAll(".program-card");
const resultsCount = document.getElementById("resultsCount");

let activeTag = "all";

function filterPrograms() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const cardText = card.innerText.toLowerCase();
    const tags = (card.dataset.tags || "").toLowerCase();

    const matchesSearch = cardText.includes(searchTerm);
    const matchesTag =
      activeTag === "all" || tags.includes(activeTag.toLowerCase());

    if (matchesSearch && matchesTag) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  resultsCount.textContent = `Showing ${visibleCount} program${visibleCount === 1 ? "" : "s"}`;

  updateNoResultsMessage(visibleCount);
}

function updateNoResultsMessage(count) {
  let existingMessage = document.querySelector(".no-results-message");

  if (count === 0) {
    if (!existingMessage) {
      const message = document.createElement("p");
      message.className = "no-results-message";
      message.textContent = "No programs match your current search or filter.";
      document.getElementById("resourceGrid").after(message);
    }
  } else if (existingMessage) {
    existingMessage.remove();
  }
}

tagButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tagButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    activeTag = button.dataset.filter;
    filterPrograms();
  });
});

searchInput.addEventListener("input", filterPrograms);

filterPrograms();