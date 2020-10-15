(function(doc, win) {

    'use strict';

    function contagem() {
        
        let saida = doc.querySelector('#saida');
        let num = Number(doc.querySelector('#fnum').value);
        saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`;
        let cont = 0;

        while (cont <= num) {

            saida.innerHTML += ` ${cont} &#x1F449;`;
            cont ++;

        }

        saida.innerHTML += ` &#x1F3C1;`;

    }

    win.contagem = contagem;

})(document, window);
