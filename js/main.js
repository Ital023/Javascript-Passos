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
        var imc = calcularImc(peso,altura);
        valueImc.textContent = imc.toFixed(2);
    }
}