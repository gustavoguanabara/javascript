(function(doc) {

    const button = doc.querySelector('#button');

    button.addEventListener('click', () => {

        let nome = prompt('Qual é o seu nome?');
        let res = doc.querySelector('#resultado');
        // Também funciona com o comando abaixo
        // let res = window.document.querySelector('section#resultado')
        res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596;`

    });

})(document);