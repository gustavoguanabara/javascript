(function(doc) {

    const button = doc.querySelector("#button");

    button.addEventListener('click', () => {

        let nome = prompt('Qual é o seu nome? ');
        alert(`Olá, ${nome}! É um prazer te conhecer!`);

    });
  
})(document);