(function(doc) {

    const button = doc.querySelector('#button');
    button.addEventListener('click', calcidade);

    function calcidade() {

        let agora = new Date();
        let ano = agora.getFullYear();
    
        let nasc = Number(prompt('Em que ano você nasceu?'));
        let idade = ano - nasc;
    
        let saida = doc.querySelector('#saida');
        saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`;
    
    }

})(document);

