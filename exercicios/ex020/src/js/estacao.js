(function(win, doc) {

    function estacao() {

        let mes = prompt('Digite o mês em extenso (ex: Setembro)');
        let saida = doc.querySelector('#saida');
        let estacao;
        switch (mes.toUpperCase()) { 
            case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
                estacao = 'INVERNO';
                break 
            case 'ABRIL': case 'MAIO': case 'JUNHO':
                estacao = 'PRIMAVERA';
                break
            case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
                estacao = 'VERÃO';
                break
            case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
                estacao = 'OUTONO';
                break
            default:
                estacao = 'INDEFINIDA';
                break
        }

        saida.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}</strong></mark>.</p>`;

    }

    win.estacao = estacao;

})(window, document);