function calcularImc(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 500){
        return true;
    }else{
        return false;
    }
}


function validaAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}
function mostrarMensagensError(erros){
    var ul = document.querySelector("#mensagem-erros");
    ul.innerHTML = "";
    erros.forEach(erro =>{
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function validaPaciente(paciente){
    var erros = [];

    if(!validaAltura(paciente.altura)){erros.push("A altura é inválida!");}
    if(!validaPeso(paciente.peso)){erros.push("O peso é inválido!")};
    if(paciente.nome.length == 0){erros.push("O nome está em branco!")};
    if(paciente.peso.length == 0){erros.push("O peso está em branco!")};
    if(paciente.altura.length == 0){erros.push("A altura está em branco!")};
    if(paciente.gordura.length == 0){erros.push("A gordura está em branco!")};

    return erros;
}