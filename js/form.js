var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click",(evento) =>{
    evento.preventDefault();

    /* Recebendo os inputs do forms */
    var formAdd = document.querySelector("#form-adiciona");

    var nome = formAdd.nome.value;
    var peso = formAdd.peso.value;
    var altura = formAdd.altura.value;
    var gordura = formAdd.gordura.value;
    var aux = calcularImc(peso,altura);
    var imc = aux.toFixed(2);

    var arrayValues = [nome,peso,altura,gordura,imc];

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