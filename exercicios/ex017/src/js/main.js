(function(doc) {

    const button1 = doc.querySelector('#button1');
    button1.addEventListener('click', gerar);

    const button2 = doc.querySelector('#button2');
    button2.addEventListener('click', limpar); 


    function gerar() {
    
        let min = 1;
        let max = 100;
        let dif = max - min;
        let aleatorio = Math.random();
        let num = min + Math.trunc(dif * aleatorio);
        
        let res = document.querySelector('#result');
        res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`;
    
    }

    function limpar() { 
    
        let res = document.querySelector('#result');
        res.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 e 100.</p>`;

    }

})(document);