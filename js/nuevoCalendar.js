
//arrays de meses WIP

const año = [
    { id: 1, verduras: "Lechuga", frutas: "Naranja"},
    { id: 2, verduras: "Acelga", frutas: "Manzana"},
]

const mostrar = año.map( (item) =>
   `Verduras: ${item.verduras} Frutas: ${item.frutas}`
);

 //WIP

 $(`.mes1`).on('click', function () {
          console.log()
          $(`.cardContainerMes`).empty();
          $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> <li> ${mostrar}  </li> </ul></div>`);
          }

 );


