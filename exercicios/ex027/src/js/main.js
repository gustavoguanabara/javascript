(function(win, doc){

    'use strict';

    function tabuada() {
        let saida = doc.querySelector('#saida');
        let n = Number(doc.querySelector('#fnum').value);
    
        saida.innerHTML = `<h2>Tabuada de ${n}</h2>`;
        let c = 1;

        while (c <= 10) {

            saida.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`;
            c ++;

        }
    }

    win.tabuada = tabuada;

})(window, document);

