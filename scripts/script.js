function PedraPapelTesoura(){
    let joKenPo = document.getElementsByName('radioJoKenPo')
    let res = document.querySelector('section#res')
    let jogadaPc = Math.floor((Math.random() * 3))
    res.innerHTML = ''
//checar empate
    if (joKenPo[0].checked && jogadaPc == 0){
        res.innerHTML += `O seu adversário lançou \u{270A} pedra \u{270A}`
        res.innerHTML += `<br>\u{1F610} Você <strong>empatou</strong>! \u{1F610}`
    } else if (joKenPo[1].checked && jogadaPc == 1) {
        res.innerHTML += `O seu adversário lançou \u{1F590} papel \u{1F590}`
        res.innerHTML += `<br>\u{1F610} Você <strong>empatou</strong>! \u{1F610}`
    } else if (joKenPo[2].checked && jogadaPc == 2){
        res.innerHTML += `O seu adversário lançou \u{270C} tesoura \u{270C}`
        res.innerHTML += `<br>\u{1F610} Você <strong>empatou</strong>! \u{1F610}`
    }
//checar vitória
    if (joKenPo[0].checked && jogadaPc == 2){
        res.innerHTML += `O seu adversário lançou \u{270C} tesoura \u{270C}`
        res.innerHTML += `<br>\u{1F3C6} Você <strong>venceu</strong>! \u{1F3C6}`
    } else if (joKenPo[1].checked && jogadaPc == 0){
        res.innerHTML += `O seu adversário lançou \u{270A} pedra \u{270A}`
        res.innerHTML += `<br>\u{1F3C6} Você <strong>venceu</strong>! \u{1F3C6}`
    } else if (joKenPo[2].checked && jogadaPc == 1){
        res.innerHTML += `O seu adversário lançou \u{1F590} papel \u{1F590}`
        res.innerHTML += `<br>\u{1F3C6} Você <strong>venceu</strong>! \u{1F3C6}`
    }
//checar derrota
    if (joKenPo[0].checked && jogadaPc == 1){
        res.innerHTML += `O seu adversário lançou \u{1F590} papel \u{1F590}`
        res.innerHTML += `<br>\u{1F62D} Você <strong>perdeu</strong>! \u{1F62D}`
    } else if (joKenPo[1].checked && jogadaPc == 2) {
        res.innerHTML += `O seu adversário lançou \u{270C} tesoura \u{270C}`
        res.innerHTML += `<br>\u{1F62D} Você <strong>perdeu</strong>! \u{1F62D}`
    } else if (joKenPo[2].checked && jogadaPc == 0) {
        res.innerHTML += `O seu adversário lançou \u{270A} pedra \u{270A}`
        res.innerHTML += `<br>\u{1F62D} Você <strong>perdeu</strong>! \u{1F62D}`
    }
}