(function(doc) {

    let button1 = doc.querySelector('#button1');
    button1.addEventListener('click', acao1);

    let button2 = doc.querySelector('#button2');
    button2.addEventListener('click', acao2);

    let button3 = doc.querySelector('#button3');
    button3.addEventListener('click', acao3);

    let button4 = doc.querySelector('#button4');
    button4.addEventListener('click', acao4);

    let resp = doc.querySelector('#saida');

    function acao1() {
        resp.innerHTML += '<p>Clicou no primeiro botão</p>'
    }
    
    function acao2() {
        resp.innerHTML += '<p>Clicou no segundo botão</p>'
    }
    
    function acao3() {
        resp.innerHTML += '<p>Clicou no terceiro botão</p>'
    }
    
    function acao4() {
        resp.innerHTML += '<p>Clicou no quarto botão</p>'
    }

})(document);