var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",(evento)=>{

    evento.target.parentNode.classList.add("fade-out");
    setTimeout(()=>{evento.target.parentNode.remove();},500);
    
})






/* pacientes.forEach((paciente)=>{
    paciente.addEventListener("dblclick",()=>{
        console.log("Double clicked!");
    })
}) */