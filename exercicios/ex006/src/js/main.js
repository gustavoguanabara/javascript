(function(doc) {

    const button = doc.querySelector('#button');

    button.addEventListener('click', () => {

        let n1 = Number(prompt('Digite um número: '));
        let n2 = Number(prompt('Digite outro número:'));
        let soma = n1 + n2;
    
        let res = doc.querySelector('#res')
        res.innerHTML = `<p>A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}</strong>!</p>`;  

    });

})(document);