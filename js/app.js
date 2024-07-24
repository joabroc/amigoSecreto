let nomeAmigo = document.getElementById('nome-amigo');
let listaAmigos = [];
let listaSorteio = [];
let listaAmigosIncluidos = document.getElementById('friends_lista_container');
let listaSorteioRealizado = document.getElementById('container-resultado');
let elementodeListagem;
let numeroSorteado;

//adicionar amigo na lista
function adicionar() {
    if (nomeAmigo.value == '') {
        alert('Por favor, informe um nome para inclusão na lista;');
    } else if(listaAmigos.includes(nomeAmigo.value)) {
        alert('Nome ja existente na lista, Por favor, informe um nome não repetido!');
    } else {
        adicionarAmigosNaLista();
        adicionarNomeNaLista();
    }
}

//Adicionar amigos na lista
function adicionarAmigosNaLista() {
    listaAmigos[listaAmigos.length] = nomeAmigo.value;
    nomeAmigo.value = "";
}

//listar amigos participantes do sorteio
function adicionarNomeNaLista() {
    elementodeListagem = document.createElement('p');
    elementodeListagem.id = `lista-amigos-${listaAmigos.length - 1}`;
    elementodeListagem.textContent = `${listaAmigos.length} - ${listaAmigos[listaAmigos.length - 1]}`;
    listaAmigosIncluidos.appendChild(elementodeListagem);
}

//sortear amigo secreto
function sortear() {
    if (listaAmigos.length < 4) {
        alert(`Não é possivel realizar o sorteio com menos de 4 pessoas. Voce selecionou até o momento ${listaAmigos.length} amigos.`);
        return
    }
    for (let index = 0; index < listaAmigos.length; index++) {
        listaSorteio[index] = sortearAmigo();
    }
    console.log(listaSorteio);
    listarSorteio();
    console.log(listaSorteio);
}

function sortearAmigo() {
    numeroSorteado = parseInt(Math.random() * listaAmigos.length);
    if (listaSorteio.includes(numeroSorteado)) {
        sortearAmigo();
    }
    return numeroSorteado
}

//listar sorteio realizazdo
function listarSorteio() {
    let elementodeListagemResultado;
    let resultadoSorteio;

    for (let index = 0; index < listaAmigos.length; index++) {
        elementodeListagemResultado = document.createElement('p');
        elementodeListagemResultado.id = `lista-sorteio-${index}`;
        resultadoSorteio = index == (listaAmigos.length - 1) ? `${listaAmigos[listaSorteio[index]]} -> ${listaAmigos[listaSorteio[0]]}` : `${listaAmigos[listaSorteio[index]]} -> ${listaAmigos[listaSorteio[index + 1]]}`;
        elementodeListagemResultado.textContent = resultadoSorteio;
        listaSorteioRealizado.appendChild(elementodeListagemResultado);
    }
}


//reiniar lista de amigos e sorteio
function reiniciar() {
    listaAmigos = [];
    listaSorteio = [];
    listaAmigosIncluidos.innerHTML = "";
    listaSorteioRealizado.innerHTML = "";
}
