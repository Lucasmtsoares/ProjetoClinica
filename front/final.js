
  
//mascaras

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
  
  //forms
//paciente
  function exibirFormulario() {
    // Seleciona o elemento da li e o elemento do formulário
    const li = document.getElementById("botao-formulario");
    const formulario = document.getElementById("form1");
  
    // Adiciona o evento de clique na li para exibir o formulário
    li.addEventListener("click", function(event) {
      event.preventDefault();
      formulario.style.display = "block";
    });
  
    // Adiciona o evento de envio ao formulário para escondê-lo depois de enviado
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      formulario.style.display = "none";
      // Aqui você pode adicionar a lógica para enviar o formulário
    });
  }
  
  //funcioanrop

  function exibirFormularioFun() {
    // Seleciona o elemento da li e o elemento do formulário
    const li = document.getElementById("botao-formularioFun");
    const formulario = document.getElementById("form2");
  
    // Adiciona o evento de clique na li para exibir o formulário
    li.addEventListener("click", function(event) {
      event.preventDefault();
      formulario.style.display = "block";
    });
  
    // Adiciona o evento de envio ao formulário para escondê-lo depois de enviado
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      formulario.style.display = "none";
      // Aqui você pode adicionar a lógica para enviar o formulário
    });
  }

  //cons
  function exibirFormularioCon() {
    // Seleciona o elemento da li e o elemento do formulário
    const li = document.getElementById("botao-formularioCon");
    const formulario = document.getElementById("form3");
  
    // Adiciona o evento de clique na li para exibir o formulário
    li.addEventListener("click", function(event) {
      event.preventDefault();
      formulario.style.display = "block";
    });
  
    // Adiciona o evento de envio ao formulário para escondê-lo depois de enviado
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      formulario.style.display = "none";
      // Aqui você pode adicionar a lógica para enviar o formulário
    });
  }


  //trat
  function exibirFormularioTrat() {
    // Seleciona o elemento da li e o elemento do formulário
    const li = document.getElementById("botao-formularioTrat");
    const formulario = document.getElementById("form4");
  
    // Adiciona o evento de clique na li para exibir o formulário
    li.addEventListener("click", function(event) {
      event.preventDefault();
      formulario.style.display = "block";
    });
  
    // Adiciona o evento de envio ao formulário para escondê-lo depois de enviado
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      formulario.style.display = "none";
      // Aqui você pode adicionar a lógica para enviar o formulário
    });
  }
  ///materia
  function exibirFormularioMat() {
    // Seleciona o elemento da li e o elemento do formulário
    const li = document.getElementById("botao-formularioMaterial");
    const formulario = document.getElementById("form5");
  
    // Adiciona o evento de clique na li para exibir o formulário
    li.addEventListener("click", function(event) {
      event.preventDefault();
      formulario.style.display = "block";
    });
  
    // Adiciona o evento de envio ao formulário para escondê-lo depois de enviado
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      formulario.style.display = "none";
      // Aqui você pode adicionar a lógica para enviar o formulário
    });
  }
  //fatuar

  function exibirFormularioFat() {
    // Seleciona o elemento da li e o elemento do formulário
    const li = document.getElementById("botao-formularioFat");
    const formulario = document.getElementById("form6");
  
    // Adiciona o evento de clique na li para exibir o formulário
    li.addEventListener("click", function(event) {
      event.preventDefault();
      formulario.style.display = "block";
    });
  
    // Adiciona o evento de envio ao formulário para escondê-lo depois de enviado
    formulario.addEventListener("submit", function(event) {
      event.preventDefault();
      formulario.style.display = "none";
      // Aqui você pode adicionar a lógica para enviar o formulário
    });
  }
  
  
  