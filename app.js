// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array donde dejará el listado de los amigos ingresados
let amigos = []; 


// Lista de Amigos
function mostrarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(valor => {
        let li = document.createElement("li");
        li.textContent = valor;
        lista.appendChild(li);
    });
}

// Agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo").value.trim(); 
    
    if (input === "") {
        alert("Por favor, inserte un nombre."); 
        return; 
    }

    amigos.push(input);
    mostrarAmigo();
    document.getElementById("amigo").value = ""; 
}

function mostrarAmigo() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
// Valide que el array no esté vacío    
    if (amigos.length === 0) { 
        alert("No hay amigos en la lista para sortear."); 
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio]; 

// Mostrar el resultado
        document.getElementById("resultadoSorteo").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

// Limpiar
        amigos = [];
    
// Limpiar la lista mostrada en pantalla
        document.getElementById("listaAmigos").innerHTML = "";
}
