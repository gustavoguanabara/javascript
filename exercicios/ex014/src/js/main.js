(function(doc) {

    const button = doc.querySelector('#button');
    button.addEventListener('click', info);

    function info() {

        let dataEHoraAtualDoHost = new Date();
        let saida = doc.querySelector('#saida');
        saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${dataEHoraAtualDoHost}</mark></p>`;
  
    }

})(document);
