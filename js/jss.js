class Curso{
    constructor(nombre, cupo, disponibilidad){
        this.nombre = nombre;
        this.cupo = cupo;
        this.disponibilidad = true;
    }
        disponible() {
            console.log("Cupos disponibles: ")+ cupo;
        }
        venta (disponible) {
            if (cantidad > this.cupo) {
                console.log("No hay mas cupo en el nivel: " + nombre)
            }
            else{
                this.cupo = this.cupo - disponible; 
            }
        }
    
}

const cursos = [];
cursos.push(new Curso("Inicial", 10, true));
cursos.push(new Curso("Intermedio", 10, true));
cursos.push(new Curso("Avanzado", 10, true));


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

  

  