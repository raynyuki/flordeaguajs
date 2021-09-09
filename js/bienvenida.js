

let boton = document.getElementById("buttonLogin")
boton.addEventListener ("click", respuestaClick)
function respuestaClick (){
    
    let itemText = "Bienvenidx " + userName.value;
    nombreBienvenida(itemText)
    let borrarLi = document.getElementById("loginItem");
    borrarLi.parentNode.removeChild(borrarLi);
    
    let listaUsers = userName.value;
    localStorage.setItem("listaUsers", JSON.stringify(listaUsers))
 
}

let userName = document.getElementById("userName");
let itemBienvenida = document.getElementById("user");

function nombreBienvenida (itemText) {
    let nombreUser = document.createElement("li");
    let nombreUserText = document.createTextNode(itemText);
    nombreUser.className = "nav-link bienvenidaUser"

    nombreUser.appendChild(nombreUserText)
    itemBienvenida.appendChild(nombreUser)
}



