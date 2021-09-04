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

contenedor.className = "nav-item"

contenedor.innerHTML = `<p>Bienvenidx ${nombreUsuario} </p>`;

itemBienvenida.appendChild(contenedor);
