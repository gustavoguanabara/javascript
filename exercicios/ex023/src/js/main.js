(function(doc) {

    let button = doc.querySelector('#botao');
    button.addEventListener('click', contar);

    function contar() {

        let saida = doc.querySelector('#saida');
        saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`;

        let cont = 2;

        while (cont <= 10) {

            saida.innerHTML += ` ${cont} &#x1F449;`;
            cont += 2;
        }

        saida.innerHTML += ` &#x1F3C1;`;
        
    }

})(document);