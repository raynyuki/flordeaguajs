let stockInicial =10;

let compraCurso =prompt("Queres saber si todavia hay lugar en nuestro curso inicial? Responde SI para enterarte");

let resultado = 0;

function restar(stock, compraCurso) {
    resultado = stock - compraCurso;
}

if ((compraCurso == "SI") || (compraCurso == "si")){
    restar(stockInicial,1);
    if (resultado >1){
        alert("Todavia estas a tiempo de anotarte, no te quedes afuera!")
    }
    
    else if (resultado <=1){
        alert("No hay mas lugar, mejor suerte para el proxima!")
    }
}


else {
    alert("No hay problema")
}


/*let preguntaCupo =prompt("Queres enterarte si todavia hay lugar en nuestro curso Inicial? Tipea SI para enterarte");



if ((preguntaCupo == "SI") || (preguntaCupo == "si")){
    const rptaCupo = cursos.find(elemento => elemento === "true");
    if rptaCupo ==="true"{
        alert("Todavia estas a tiempo de anotarte, no te quedes afuera!")
    }
}

else {
    alert("No hay problema")
}*/



 



