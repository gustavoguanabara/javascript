function contar() {
    let saida = document.getElementById('saida')

    let cont = 1
    while (cont <= 10) {
        if (cont % 2 == 0) {
            saida.innerHTML += `<mark><strong> ${cont} </strong></mark>&#x1F449;`    
        } else {
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++ // Corresponde a cont = cont + 1
    }
    saida.innerHTML += ` &#x1F3C1; <br>`
}