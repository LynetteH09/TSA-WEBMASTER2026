const resourceForm = document.getElementById("resourceForm");
const successMessage = document.getElementById("successMessage");

const requiredTextFields = ["orgName", "resourceType", "category", "description"];
const optionalEmailField = document.getElementById("submitterEmail");
const optionalUrlField = document.getElementById("contact");
const verifyCheck = document.getElementById("verifyCheck");

function showError(field, message) {
  const formGroup = field.closest(".form-group");
  if (!formGroup) return;

  formGroup.classList.add("error");
  const errorBox = formGroup.querySelector(".error-message");
  if (errorBox) {
    errorBox.textContent = message;
  }
}

function clearError(field) {
  const formGroup = field.closest(".form-group");
  if (!formGroup) return;

  formGroup.classList.remove("error");
  const errorBox = formGroup.querySelector(".error-message");
  if (errorBox) {
    errorBox.textContent = "";
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidURL(value) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

function validateField(field) {
  const value = field.value.trim();

  if (requiredTextFields.includes(field.id) && !value) {
    showError(field, "This field is required.");
    return false;
  }

  if (field.id === "contact" && value && !isValidURL(value)) {
    showError(field, "Please enter a valid URL starting with https://");
    return false;
  }

  if (field.id === "submitterEmail" && value && !isValidEmail(value)) {
    showError(field, "Please enter a valid email address.");
    return false;
  }

  clearError(field);
  return true;
}

function validateCheckbox() {
  const checkboxGroup = verifyCheck.closest(".form-group");
  const errorBox = checkboxGroup.querySelector(".error-message");

  if (!verifyCheck.checked) {
    checkboxGroup.classList.add("error");
    errorBox.textContent = "You must confirm before submitting.";
    return false;
  }

  checkboxGroup.classList.remove("error");
  errorBox.textContent = "";
  return true;
}

requiredTextFields.forEach((id) => {
  const field = document.getElementById(id);
  field.addEventListener("input", () => validateField(field));
  field.addEventListener("blur", () => validateField(field));
});

optionalEmailField.addEventListener("input", () => validateField(optionalEmailField));
optionalEmailField.addEventListener("blur", () => validateField(optionalEmailField));

optionalUrlField.addEventListener("input", () => validateField(optionalUrlField));
optionalUrlField.addEventListener("blur", () => validateField(optionalUrlField));

verifyCheck.addEventListener("change", validateCheckbox);

resourceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let isFormValid = true;

  requiredTextFields.forEach((id) => {
    const field = document.getElementById(id);
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  if (!validateField(optionalEmailField)) isFormValid = false;
  if (!validateField(optionalUrlField)) isFormValid = false;
  if (!validateCheckbox()) isFormValid = false;

  if (!isFormValid) {
    successMessage.classList.add("hidden");
    return;
  }

  successMessage.classList.remove("hidden");
  resourceForm.reset();

  document.querySelectorAll(".form-group").forEach((group) => {
    group.classList.remove("error");
    const errorBox = group.querySelector(".error-message");
    if (errorBox) errorBox.textContent = "";
  });

  successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
});