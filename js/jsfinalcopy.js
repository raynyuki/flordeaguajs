
$( document ).ready(function() {
    console.log('El DOM esta listo');
});

class Curso{
    constructor(nombre, cupo, disponibilidad){
        this.nombre = nombre;
        this.cupo = cupo;
        this.disponibilidad = true;
    }
            
}

const cursos = [];
cursos.push(new Curso("Inicial", 10, true));
cursos.push(new Curso("Intermedio", 0, true));
cursos.push(new Curso("Avanzado", 1, true));

$(`#clickRpta0`).on('click', function () {
    if ( (cursos[0].cupo) > 0){
        console.log("Hay cupo")
        }
        else{
        console.log("No hay cupo")
        }
});

$(`#clickRpta1`).on('click', function () {
    if ( (cursos[1].cupo) > 0){
        console.log("Hay cupo")
        }
        else{
        console.log("No hay cupo")
        }
});

$(`#clickRpta2`).on('click', function () {
    if ( (cursos[2].cupo) > 0){
        console.log("Hay cupo");
        }
        else{
        console.log("No hay cupo")
        }
           
        
        
});







