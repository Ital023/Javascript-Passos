var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click",()=>{
    var xhr = new XMLHttpRequest();

    xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load",()=>{
        if(xhr.status == 200){
            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta);
    
            pacientes.forEach(paciente=>{
                adicionarPacienteNaTabela(paciente);
            })
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
        
    })

    xhr.send();
})