const form = document.getElementById("resourceForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    form.reset();
    document.getElementById("successMessage")
      .classList.remove("hidden");
  });
}
