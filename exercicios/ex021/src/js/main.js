(function(doc) {

    let button = doc.querySelector('#botao');
    button.addEventListener('click', contar);

    function contar() {

        let saida = doc.querySelector('#saida');
    
        saida.innerHTML += `<h2>Contando de 1 até 10</h2>`;
    
        let cont = 1;

        while (cont <= 10) {

            saida.innerHTML += ` ${cont} &#x1F449;`;
            cont ++;
        
        }

        saida.innerHTML += ` &#x1F3C1;`;

    }

})(document);

