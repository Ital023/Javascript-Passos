var filtro = document.querySelector("#filtrar-paciente");

filtro.addEventListener("input",()=>{
    var pacientes = document.querySelectorAll(".paciente");

    if(filtro.value.length > 0){
        pacientes.forEach(paciente =>{
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(filtro.value,"i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel"); 
            }
        })
        
    }else{
        pacientes.forEach(paciente =>{
            paciente.classList.remove("invisivel");
        })
    }
})
