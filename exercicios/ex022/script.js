/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material 
    para seu próprio aprendizado. Professores também 
    podem ter acesso a todo o conteúdo e usá-los com 
    seus alunos. Porém todos os que usarem esse 
    material - seja para qual for a finalidade - deverão 
    manter a referência ao material original, disponível 
    em https://github.com/gustavoguanabara/javascript. Este 
    material não poderá ser utilizado em nenhuma hipótese 
    para ser replicada - integral ou parcialmente - 
    por autores/editoras/instituições para criar livros 
    ou apostilas, com finalidades de obter ganho financeiro 
    com ele.
*/

function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`

    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0) {
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
        } else {
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1;`
}