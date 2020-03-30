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

let resp = window.document.getElementById('saida')
// Lembre-se que toda variável declarada aqui fora possui escopo global. Veja mais sobre escopo no seu material em PDF, na aula 07.

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