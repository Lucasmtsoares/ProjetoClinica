const menuButton = document.getElementById("menu-button");
const formContainer = document.getElementById("form-container");
const submitButton = document.getElementById("submit-button");

menuButton.addEventListener("click", () => {
  formContainer.style.display = "block";
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  formContainer.style.display = "none";
});
