(function(doc, win){

    function jogar() {

        let jogador = Number(prompt('Qual é o seu palpite?'));
        let res = doc.querySelector('#result');

        if (jogador < computador) {

            res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`;
        
        } else if (jogador > computador) {
        
            res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`;
        
        } else if (jogador == computador) {
 
            res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`;              
            doc.querySelector('#botao').style.visibility = 'hidden';

        }

    }

    win.jogar = jogar;

})(document, window);