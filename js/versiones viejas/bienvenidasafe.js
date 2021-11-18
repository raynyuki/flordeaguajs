let bienvenida =prompt("Ingresa tu nombre");

if (bienvenida != ""){
    alert("Bienvenide " + bienvenida + " para saber nuestro cupo para los cursos envia un mail a mail@mail.com")
}

localStorage.setItem('nombre', bienvenida); 



//el nodo donde vamos a crear un elemento nuevo

let itemBienvenida = document.getElementsByClassName("user");

//datos a agregar al elemento
let nombreUsuario = localStorage.getItem('nombre');

let contenedor = document.createElement("li");

contenedor.className = "nav-link bienvenidaUser"

contenedor.innerHTML = `<a>Bienvenidx ${nombreUsuario} </a>`;

itemBienvenida[0].appendChild(contenedor);