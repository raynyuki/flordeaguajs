
$( document ).ready(function() {
    console.log('El DOM esta listo');
});

class Curso{
    constructor(nombre, cupo, disponibilidad){
        this.nombre = nombre;
        this.cupo = cupo;
        disponibilidad = true;
    }
            
}

const cursos = [];
cursos.push(new Curso("Inicial", 10, true));
cursos.push(new Curso("Intermedio", 0, true));
cursos.push(new Curso("Avanzado", 10, true));

$(`#clickRpta0`).on('click', function () {
    if ( (cursos[0].cupo) > 0){
        console.log("Hay cupo")
        $(`#clickRpta0`).empty();
        $(`#clickRpta0`).prepend(`Todavia hay lugar, anotate!`);
        }
        else{
        console.log("No hay cupo")
        $(`#clickRpta0`).empty();
        $(`#clickRpta0`).prepend(`No hay mas lugar por ahora`);
        }
});

$(`#clickRpta1`).on('click', function () {
    if ( (cursos[1].cupo) > 0){
        console.log("Hay cupo")
        $(`#clickRpta1`).empty();
        $(`#clickRpta1`).prepend(`Todavia hay lugar, anotate!`);
        }
        else{
        console.log("No hay cupo")
        $(`#clickRpta1`).empty();
        $(`#clickRpta1`).prepend(`No hay mas lugar por ahora`);
        }
});

$(`#clickRpta2`).on('click', function () {
    if ( (cursos[2].cupo) > 0){
        console.log("Hay cupo");
        
        $(`#clickRpta2`).empty();
        $(`#clickRpta2`).prepend(`Todavia hay lugar, anotate!`);

    }
        else{
        console.log("No hay cupo")
        $(`#clickRpta2`).empty();
        $(`#clickRpta2`).prepend(`No hay mas lugar por ahora`);
        }
           
        
        
});







