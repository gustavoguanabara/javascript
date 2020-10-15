(function(win, doc) {

    'use strict';
    
    function fatorial() {
        let saida = doc.querySelector('#saida')
        let n = Number(doc.querySelector('#fnum').value)
    
        saida.innerHTML += `<h2>Calculando ${n}!</h2>`
        let c = n
        let fat = 1
        while (c > 1) {
            saida.innerHTML += `${c} x `
            fat *= c // Correspondente ao cálculo fat = fat * c
            c --
        }
        saida.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
        // Usei o toLocaleString() na linha acima apenas para aparecerem os separadores de milhar/milhões/etc...
    }

    win.fatorial = fatorial;

})(window, document);

