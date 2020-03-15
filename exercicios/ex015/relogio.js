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

function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
    saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}