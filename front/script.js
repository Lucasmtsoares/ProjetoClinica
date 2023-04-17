//paciente

/*const menuButton = document.getElementById("tituloPac");
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
}); */

//lista de opcoes para o paciente

var opcoesVisiveisPac = false; //funcao para ocultar o sub menu

function mostrarOpcoesPac(){
  var opPac = document.getElementById("");
  if(opcoesVisiveisPac){
    opPac.style.display = "none";
    opcoesVisiveisPac = false;

  }else{
    opPac.style.display = "block";
    opcoesVisiveisPac = true;
  }
}

//trabalhando no forms do paciente  - mascaras para os campos 







//funcionario

//lista de opcoes para o funcionario
var opcoesVisiveisFun = false; //funcao para ocultar o sub menu

function mostrarOpcoesFun(){
  var op = document.getElementById("sub_menuFun");
  if (opcoesVisiveisFun) {
    op.style.display = "none";
    opcoesVisiveisFun = false;
  } else {
    op.style.display = "block";
    opcoesVisiveisFun = true;
  }
}

//consulta

var opcoesVisiveisCon = false; //funcao para ocultar o sub menu
function mostrarOpcoesCon(){
  var opCon = document.getElementById("sub_menuCon");
  if(opcoesVisiveisCon){
    opCon.style.display = "none";
    opcoesVisiveisCon = false;
  }else{
    opCon.style.display = "block";
    opcoesVisiveisCon = true;
  }
}
//tratamento

var opcoesVisiveisTrat = false; //funcao para ocultar o sub menu
function mostrarOpcoesTrat(){
  var opTrat = document.getElementById("sub_menuTrat");
  if(opcoesVisiveisTrat){
    opTrat.style.display = "none";
    opcoesVisiveisTrat = false;
  }else{
    opTrat.style.display = "block";
    opcoesVisiveisTrat = true;
  }
}

//fornecedor

var opcoesVisiveisForn = false; //funcao para ocultar o sub menu
function mostrarOpcoesForn(){
  var opForn = document.getElementById("sub_menuForn");
  if(opcoesVisiveisForn){
    opForn.style.display = "none";
    opcoesVisiveisForn = false;
  }else{
    opForn.style.display = "block";
    opcoesVisiveisForn = true;
  }
}
//material

var opcoesVisiveisMateriais = false; //funcao para ocultar o sub menu
function mostrarOpcoesMat(){
  var opMateriais = document.getElementById("sub_menuMaterial");
  if(opcoesVisiveisMateriais){
    opMateriais.style.display = "none";
    opcoesVisiveisMateriais = false;
  }else{
    opMateriais.style.display = "block";
    opcoesVisiveisMateriais = true;
  }
}
///fatura

var opcoesVisiveisFatura = false; //funcao para ocultar o sub menu
function mostrarOpcoesFat(){
  var opFatura = document.getElementById("sub_menuFatura");
  if(opcoesVisiveisFatura){
    opFatura.style.display = "none";
    opcoesVisiveisFatura = false;
  }else{
    opFatura.style.display = "block";
    opcoesVisiveisFatura = true;
  }
}


function mascaraTelefone(selector) {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener('input', function() {
      let phone = this.value;
      
      phone = phone.replace(/\D/g, '');
      phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2');
      phone = phone.replace(/(\d)(\d{4})$/, '$1-$2');
      
      this.value = phone;
    });
  });
}

mascaraTelefone('input[type="tel"]');



function mascaraCPF(selector) {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener('input', function() {
      let cpf = this.value;
      
      cpf = cpf.replace(/\D/g, ''); // Remove tudo que não é dígito
      cpf = cpf.replace(/^(\d{3})(\d)/g, '$1.$2'); // Insere ponto após o terceiro dígito
      cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3'); // Insere ponto após o sexto dígito
      cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/g, '$1.$2.$3-$4'); // Insere hífen após o nono dígito
      
      this.value = cpf;
    });
  });
}

mascaraCPF('input[type="cpf"]');

function mascaraRG(selector) {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener('input', function() {
      let rg = this.value;
      
      rg = rg.replace(/\D/g, ''); // remove tudo que não é dígito
      rg = rg.replace(/(\d{7})(\d{1})/, "$1-$2");

      
      
      this.value = rg;
    });
  });
}

mascaraRG('input[type="rg"]');

function validarEmail(selector) {
  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener('input', function() {
      const email = this.value;
      
      const re = /\S+@\S+\.\S+/;
      const isValid = re.test(email);
      
      if (isValid) {
        this.classList.remove('invalid');
        this.classList.add('valid');
      } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
      }
    });
  });
}

validarEmail('input[type="email"]');
