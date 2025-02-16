let listaAmigos = [];
let botaoAdicionar = document.querySelector('button');

botaoAdicionar.addEventListener('click', adicionarAmigo);

function adicionarAmigo() {
    let nomeAmigo = document.querySelector('input').value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    listaAmigos.push(nomeAmigo);
    atualizarLista();
    document.querySelector('input').value = '';
}

function atualizarLista() {
    let lista = document.querySelector('.name-list');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('A lista se encontra vazia, por favor insira um nome.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = 'E o nome sorteado foi : ' + amigoSorteado;
}