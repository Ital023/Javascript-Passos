var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length;i++){
    paciente = pacientes[i];
    
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    
    var valueImc = paciente.querySelector(".info-imc");
    
    var validacao = true;
    
    if(peso <= 0 || peso >= 700){
        console.log("Peso invalido!");
        valueImc.textContent = "Peso inválido!";
        validacao = false;
        paciente.classList.add("paciente-invalido");
    }
    if(altura >= 3.00 || altura <= 0.00){
        console.log("Altura inválida!");
        valueImc.textContent = "Altura inválida!";
        validacao = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(validacao == true){
        var imc = peso / (altura * altura);
        valueImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",(evento) =>{
    evento.preventDefault();

    /* Recebendo os inputs do forms */
    var formAdd = document.querySelector("#form-adiciona");

    var nome = formAdd.nome.value;
    var peso = formAdd.peso.value;
    var altura = formAdd.altura.value;
    var gordura = formAdd.gordura.value;

    var arrayValues = [nome,peso,altura,gordura];

    /* Criando a tabela ao clicar no botao */
    var pacienteTr = document.createElement("tr");

    /* Criando os elementos td */
    var nomeTD = document.createElement("td");
    var pesoTD = document.createElement("td");
    var alturaTD = document.createElement("td");
    var gorduraTD = document.createElement("td");
    var imcTD = document.createElement("td");

    /* Adicionando os elementos no tr */
    var arrayTd = [nomeTD,pesoTD,alturaTD,gorduraTD,imcTD];

    for(var i = 0;i < arrayTd.length;i++){
        arrayTd[i].textContent = arrayValues[i];
        pacienteTr.appendChild(arrayTd[i]);
    }

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

})



