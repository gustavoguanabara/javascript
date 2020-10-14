(function(doc) {

    const button = doc.querySelector('#button');

    button.addEventListener('click', () => {

        let aluno = prompt('Qual é o nome do aluno?');
        let nota1 = Number(prompt(`Qual foi a primeira nota de ${aluno}?`));
        let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${aluno}?`));
        let media = (nota1 + nota2) / 2;

        let res = doc.querySelector('#situacao');
        res.innerHTML = `<p>Calculando a média final de <mark>${aluno}</mark>.</p>`;
        res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
        res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`

    });

})(document);