(function(doc) {

    const button = doc.querySelector('#button');
    button.addEventListener('click', teste);

    function teste() {

        let num = Number(prompt('Digite um número: '));
        let tipo;

        if (num % 2 == 0) {

            tipo = '<strong>PAR</strong>';

        } else {

            tipo = '<strong>ÍMPAR</strong>';

        }
    
        let res = doc.querySelector('#result');
        res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`;

    }

})(document);


