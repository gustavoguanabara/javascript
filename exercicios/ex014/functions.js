function info() {
    let agora = new Date
    let saida = document.getElementById('saida')
    saida.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark></p>`
}