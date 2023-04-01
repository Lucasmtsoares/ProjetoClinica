//paciente

const menuButton = document.getElementById("tituloPac");
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

//lista de opcoes para o funcionario
var opcoesVisiveis = false;

function mostrarOpcoes(){
  var op = document.getElementById("sub_menuFun");
  if (opcoesVisiveis) {
    op.style.display = "none";
    opcoesVisiveis = false;
  } else {
    op.style.display = "block";
    opcoesVisiveis = true;
  }
}

//consulta

//tratamento

//material

///fatura

