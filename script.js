const themeToggleBtn = document.getElementById("themeToggle");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggleBtn.textContent = "Light mode";
  } else {
    themeToggleBtn.textContent = "Dark mode";
  }
});

// Simple search interaction
const locationInput = document.getElementById("locationInput");
const typeSelect = document.getElementById("typeSelect");
const budgetSelect = document.getElementById("budgetSelect");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const locationValue = locationInput.value.trim() || "any location";
  const typeValue = typeSelect.value;
  const budgetValue = budgetSelect.value;

  alert(
    "Searching for " +
      typeValue +
      " in " +
      locationValue +
      " with budget: " +
      budgetValue
  );
});
