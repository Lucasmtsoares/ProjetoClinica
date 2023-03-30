//paciente

const menuButton = document.getElementById("titulo");
const formContainer = document.getElementById("cliente");
const submitButton = document.getElementById("submit-button");
const form = document.querySelector("form");

menuButton.addEventListener("click", () => {
  formContainer.style.display = "block";
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    formContainer.style.display = "none";
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});

//funcionario

const menuButtonFun = document.getElementById("titulo;fun");
const formContainerFun = document.getElementById("areaFun");
const submitButtonFun = document.getElementById("submit-button");
const formFun = document.querySelector("form");

menuButton.addEventListener("click", () => {
  formContainer.style.display = "block";
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (form.checkValidity()) {
    formContainer.style.display = "none";
  } else {
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});

//consulta

//tratamento

//material

///fatura

