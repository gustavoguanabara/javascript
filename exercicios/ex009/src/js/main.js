(function(doc) {

    let contador = 0; 
    let res = document.querySelector('#result');

    const buttonContar = doc.querySelector('#buttonContar');
    buttonContar.addEventListener('click', contar);

    const buttonZerar = doc.querySelector('#buttonZerar');
    buttonZerar.addEventListener('click', zerar);  

    function contar() {
        contador ++;
        res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`;
    }

    function zerar() {
        contador = 0;
        res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`;
    }

})(document);