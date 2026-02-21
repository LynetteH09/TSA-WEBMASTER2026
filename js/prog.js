document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const ageFilter = document.getElementById("ageFilter");
  const countEl = document.getElementById("progCount");

  const cards = Array.from(document.querySelectorAll(".prog-card"));
  const sections = Array.from(document.querySelectorAll(".prog-section"));

  // Toggle details (event delegation)
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".toggle-btn");
    if (!btn) return;

    const card = btn.closest(".prog-card");
    if (!card) return;

    const details = card.querySelector(".details");
    if (!details) return;

    const isHidden = details.classList.contains("hidden");
    details.classList.toggle("hidden");

    btn.textContent = isHidden ? "Hide Details" : "View Details";
  });

  function matchesSearch(card, q) {
    if (!q) return true;
    const text = [
      card.dataset.name || "",
      card.dataset.tags || "",
      card.textContent || ""
    ].join(" ").toLowerCase();
    return text.includes(q);
  }

  function matchesAge(card, age) {
    if (age === "all") return true;
    return (card.dataset.group || "") === age;
  }

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const age = ageFilter.value;

    let visibleCount = 0;

    cards.forEach(card => {
      const ok = matchesSearch(card, q) && matchesAge(card, age);
      card.style.display = ok ? "" : "none";
      if (ok) visibleCount++;
    });

    sections.forEach(sec => {
      const group = sec.dataset.group;
      const anyVisible = cards.some(c => c.dataset.group === group && c.style.display !== "none");
      sec.style.display = anyVisible ? "" : "none";
    });

    countEl.textContent = `Showing ${visibleCount} programs`;
  }

  searchInput.addEventListener("input", applyFilters);
  ageFilter.addEventListener("change", applyFilters);

  applyFilters();
});