
//arrays de meses

const año = [
    { id: 1, verduras: "Poroto Chaucha, Zapallito, Alcachofa", frutas: "Sandia"},
    { id: 2, verduras: "Brocoli, Cebolla de Verdeo y Coliflor", frutas: "Frutilla"},
    { id: 3, verduras: "Escarola, Espinaca, Ajo y Repollo", frutas: "Citricos" },
    { id: 4, verduras: "Cebolla Bulbo, Perejil y Puerro", frutas: "Frutilla" },
    { id: 5, verduras: "Radicheta, Zanahoria y Haba", frutas: "Pomelo" },
    { id: 6, verduras: "Cebolla de Verdeo, Acelga y Rabanito", frutas: "Manzana" },
    { id: 7, verduras: "Pimiento, Lechuga y Arveja", frutas: "Arandano" },
    { id: 8, verduras: "Albahaca, Remolacha y Batata", frutas: "Frambuesa" },
    { id: 9, verduras: "Berenjena, Lechuga y Tomate", frutas: "Higo" },
    { id: 10, verduras: "Zapallo, Rabanito y Pepino", frutas: "Frutilla" },
    { id: 11, verduras: "Calabaza, Lechuga y Albahaca", frutas: "Kiwi" },
    { id: 12, verduras: "Maiz Dulce, Acelga y Apio", frutas: "Sandia" },
]


//jquery


 $(`.mes1`).on('click', function () {
          console.log()
          $(`.cardContainerMes`).empty();
          $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[0].verduras}</li> Frutas: <li>${año[0].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
          }
);

$(`.mes2`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[1].verduras}</li> Frutas: <li>${año[1].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes3`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[2].verduras}</li> Frutas: <li>${año[2].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes4`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[3].verduras}</li> Frutas: <li>${año[3].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes5`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[4].verduras}</li> Frutas: <li>${año[4].frutas}</li> </ul></div>  <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes6`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[5].verduras}</li> Frutas: <li>${año[5].frutas}</li> </ul></div><div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes7`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[6].verduras}</li> Frutas: <li>${año[6].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes8`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[7].verduras}</li> Frutas: <li>${año[7].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes9`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[8].verduras}</li> Frutas: <li>${año[8].frutas}</li> </ul></div><div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes10`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[9].verduras}</li> Frutas: <li>${año[9].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes11`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[9].verduras}</li> Frutas: <li>${año[9].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);

$(`.mes12`).on('click', function () {
    console.log()
    $(`.cardContainerMes`).empty();
    $(`.cardContainerMes`).prepend(`<div class="calendario container-fluid d-flex justify-content-center align-items-center"> <ul> Verduras: <li>${año[11].verduras}</li> Frutas: <li>${año[11].frutas}</li> </ul></div> <div class="container-fluid d-flex justify-content-center align-items-center pt-5"> <button class="volverBtn"  onclick="location.reload()"/>Volver a calendario</button></div>`);
    }
);



//ajax

const URLJSON = 'https://jsonplaceholder.typicode.com/posts'



 $('#btnSub').click(function () {
    
    var emailData = $('input#email').val();
    console.log(emailData);
    if (emailData !== "") {
        $.ajax({
            url: URLJSON, 
            method: 'POST',
            data: {
                email: emailData 
            },
            success: function (data) {
                console.log(data);
                $(`#email`).remove();
                $(`#btnSub`).remove();
                $(`#newsletter`).prepend(`<p>Gracias por subscribirte</p>`);
            },
        });
    } else {
        alert("Ingresa un email valido");
    }
});