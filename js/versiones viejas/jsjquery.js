
$( document ).ready(function() {
    console.log('El DOM esta listo');
});


const productos = [
    {  id: 1, nombre: "Inicial",  cupo: 10, precio: 3000 },
    {  id: 2, nombre: "Intermedio",  cupo: 10, precio: 3100 },
    {  id: 3, nombre: "Avanzado",  cupo: 10, precio: 3200},
];

for (const producto of productos) {
 
    $("#clickRpta1").append(`<div>
                            <p> Nivel: ${producto.nombre} Cupo: ${producto.cupo} Precio $ ${producto.precio}</p>
                            <button id="btnCurso${producto.id}"class="btn1">Comprar</button>
                                </div>`);

    $(`#btnCurso${producto.id}`).on('click', function () {
        console.log(`Compraste el Curso ${producto.nombre}`);
        $(".btn1").remove()
        $("#clickRpta1").append(`<div>
                            <button id="btnCurso2${producto.id}">Compraste el Nivel ${producto.nombre} </button>
                                </div>`)
    })
}

