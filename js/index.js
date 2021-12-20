
const URLJSON = 'https://jsonplaceholder.typicode.com/posts'



$('#buttonLogin').click(function () {

   let userData = $('input#userName').val();
   if (userData !== "") {
       $.ajax({
           url: URLJSON, 
           method: 'POST',
           data: {
               name: userData 
           },
           success: function (data) {
               
               $(`#userName`).remove();
               $(`#buttonLogin`).remove();
               $(`#loginItem`).prepend(`<p class="nav-link bienvenidaUser">Bienvenidx `+ userData + `</p>`);
           },
       });
   } 
   else {
       alert("Insert a name!");
   }

});

