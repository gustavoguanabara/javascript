(function(doc) {

    const button = doc.querySelector('#botao');
    button.addEventListener('click', contar);

    function contar() {

        let saida = doc.querySelector('#saida');
        saida.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`;
        let cont = 10;

        while (cont >= 1) {

            saida.innerHTML += ` ${cont} &#x1F449;`;
            cont --;

        }

        saida.innerHTML += ` &#x1F3C1;`;
        
    }

})(document);