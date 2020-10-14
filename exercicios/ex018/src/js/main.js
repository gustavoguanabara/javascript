(function(doc, win, jogar, sortear) {

    win.addEventListener('load', sortear);   

    const botao = doc.querySelector('#botao');
    botao.addEventListener('click', jogar);

})(document, window, jogar, sortear);