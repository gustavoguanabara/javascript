(function(doc) {

    alert('Seja bem-vindo(a) ao meu site!');
    const button = doc.querySelector('#button');

    button.addEventListener('click', () => {

        let n1 = Number(prompt('Digite um número: '));
        let res = doc.querySelector('#res');

        res.innerHTML = `<p>O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!</p>`;

    });

})(document);