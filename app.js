let listaDeAmigos = [];

// Adiciona um event listener para o campo "amigo"
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") { 
        adicionarAmigo(); 
    }
});

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim(); 
    if (nomeAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    }
    if (listaDeAmigos.includes(nomeAmigo)) { 
        alert("Este nome já foi adicionado.");
        return;
    }
    listaDeAmigos.push(nomeAmigo); 
    document.getElementById("amigo").value = ""; 
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaDeAmigos.forEach((amigo, index) => {
        let itemLista = document.createElement("li");
        itemLista.innerHTML = `${amigo} <button onclick="removerAmigo(${index})">Remover</button>`;
        lista.appendChild(itemLista);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1); 
    atualizarListaAmigos(); 
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let nomeSorteado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        nomeSorteado = listaDeAmigos[indiceAleatorio];
    } while (nomeSorteado === "" && listaDeAmigos.length > 1); 

    document.getElementById("resultado").innerHTML = `Seu amigo secreto é: <strong>${nomeSorteado}</strong>`;
}

// Função para limpar a lista de amigos e o resultado
function limparLista() {
    listaDeAmigos = []; 
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = ""; 
}


