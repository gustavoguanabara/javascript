(function(doc){

    let button = doc.querySelector('#botao');
    button.addEventListener('click', contar);

    function contar() {

        let saida = doc.querySelector('#saida');
    
        saida.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`;
    
        let cont = 1;
        
        while (cont <= 10) {

            if (cont % 2 == 0) {

                saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`;    
            
            } else {
            
                saida.innerHTML += ` ${cont} &#x1F449;`;
            
            }
            
            cont ++; 
        
        }
        
        saida.innerHTML += ` &#x1F3C1;`;
    
    }

})(document);