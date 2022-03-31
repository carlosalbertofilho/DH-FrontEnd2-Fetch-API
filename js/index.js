// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.


function getUser(){
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json();
    })
    .then(data => {
        //manipulamos a resposta
        console.log(data);
        renderizarDadosUsuario(data.results[0]);
    });
}

getUser();

let buttonReference = document.getElementById('random');

buttonReference.addEventListener('click', function(event) {
    event.preventDefault();

    getUser();
});

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    let imageUserReference = document.getElementById('imageUser');
    let nameUserReference = document.getElementById('nameUser');
    let emailUserReference = document.getElementById('emailUser');

    imageUserReference.src = dados.picture.large;
    nameUserReference.innerText = `${dados.name.first} ${dados.name.last}`;
    emailUserReference.innerText = dados.email;

    console.log(imageUserReference);
}


