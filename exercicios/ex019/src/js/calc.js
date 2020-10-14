(function(win, doc) {

    function calc() {

        let n1 = Number(prompt('Primeiro valor:'));
        let n2 = Number(prompt('Segundo valor:'));
        let op = prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[s] Somar \n[su] Subtrair \n[m] Multiplicar \n[d] Dividir`);

        let saida = doc.querySelector('#saida');
        saida.innerHTML = `<h2>Calculando...</h2>`;

        switch (op) {
            
            case 's':
                saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
                break; 
            case 'su':
                saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
                break;
            case 'm':
                saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
                break;
            case 'd':
                saida.innerHTML += `<p>${n1} &#247; ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>` // O método toLocaleString() é muito útil para mostrar números de forma mais compatível com o que usamos aqui no Brasil.
                break;
            default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
                saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
                break;

        }

    }

    win.calc = calc;

})(window, document);