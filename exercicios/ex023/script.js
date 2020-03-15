function contar() {
    let saida = document.getElementById('saida')

    let cont = 2
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont += 2 // Corresponde a cont = cont + 2
    }
    saida.innerHTML += ` &#x1F3C1; <br>`
}