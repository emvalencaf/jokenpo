import { JoKenPoController } from "./Controller/Jokenpo.controller.js"
import { JoKenPoService } from "./Service/Jokenpo.service.js"
import { JoKenPoView } from "./View/Jokenpo.view.js"
import { JoKenPoModel } from "./Model/Jokenpo.model.js"

//módulos do jogo
    const joKenPoView = new JoKenPoView(
        document.querySelector('#res'),
        document.querySelector('#res2'),
        [...document.querySelectorAll("button")]
    )
    const joKenPoService = new JoKenPoService(new JoKenPoModel())
    const joKenPoController = new JoKenPoController(joKenPoView, joKenPoService) 
    console.log(joKenPoService)
const main = document.querySelector("main")

//buscando a jogada no DOM
    main.addEventListener("click",e=>{
        if(e.target.id === "botaoJogar"){
            const inputs = [...main.querySelectorAll("input")]

            return inputs.forEach(input=>{
                if(input.checked) return joKenPoController.definirJogada(input)
            })
        }

        if(e.target.id === "botaoJogarNovamente"){
            joKenPoController.definirNovoJogo()
        }

        if(e.target.id === "botaoHistorico"){
            joKenPoController.mostrarHistorico()
        }
    })

    
/*

let partidas = []
function PedraPapelTesoura(){
    if(partidas.length >= 3){
        alert('[ERRO] Você já jogou três partidas, para jogar novamente dê refresh ou aperte jogar novamente')
        let botao1 = document.querySelector('input#botaoJogar')
        let botao2 = document.querySelector('input#botaoJogarNovamente')
        let botao3 = document.querySelector('input#botaoHistorico')
        botao1.setAttribute('style','display:none')
        botao2.setAttribute('style','display:inline')
        botao3.setAttribute('style','display:inline')
    } else{
        let joKenPo = document.getElementsByName('radioJoKenPo')
        let res = document.querySelector('section#res')
        let jogadaPc = Math.floor((Math.random() * 3))
        res.innerHTML = ''
    //checar empate
        if (joKenPo[0].checked && jogadaPc == 0){
            res.innerHTML += `O seu adversário lançou \u{270A} pedra \u{270A}`
            res.innerHTML += `<br>\u{1F610} Você <strong>empatou</strong>! \u{1F610}`
            partidas.push('\u{1F610} empate \u{1F610}')
        } else if (joKenPo[1].checked && jogadaPc == 1) {
            res.innerHTML += `O seu adversário lançou \u{1F590} papel \u{1F590}`
            res.innerHTML += `<br>\u{1F610} Você <strong>empatou</strong>! \u{1F610}`
            partidas.push('\u{1F610} empate \u{1F610}')
        } else if (joKenPo[2].checked && jogadaPc == 2){
            res.innerHTML += `O seu adversário lançou \u{270C} tesoura \u{270C}`
            res.innerHTML += `<br>\u{1F610} Você <strong>empatou</strong>! \u{1F610}`
            partidas.push('\u{1F610} empate \u{1F610}')
        }
    //checar vitória
        if (joKenPo[0].checked && jogadaPc == 2){
            res.innerHTML += `O seu adversário lançou \u{270C} tesoura \u{270C}`
            res.innerHTML += `<br>\u{1F3C6} Você <strong>venceu</strong>! \u{1F3C6}`
            partidas.push('\u{1F3C6} vitória \u{1F3C6}')
        } else if (joKenPo[1].checked && jogadaPc == 0){
            res.innerHTML += `O seu adversário lançou \u{270A} pedra \u{270A}`
            res.innerHTML += `<br>\u{1F3C6} Você <strong>venceu</strong>! \u{1F3C6}`
            partidas.push('\u{1F3C6} vitória \u{1F3C6}')
        } else if (joKenPo[2].checked && jogadaPc == 1){
            res.innerHTML += `O seu adversário lançou \u{1F590} papel \u{1F590}`
            res.innerHTML += `<br>\u{1F3C6} Você <strong>venceu</strong>! \u{1F3C6}`
            partidas.push('\u{1F3C6} vitória \u{1F3C6}')
        }
    //checar derrota
        if (joKenPo[0].checked && jogadaPc == 1){
            res.innerHTML += `O seu adversário lançou \u{1F590} papel \u{1F590}`
            res.innerHTML += `<br>\u{1F62D} Você <strong>perdeu</strong>! \u{1F62D}`
            partidas.push('\u{1F62D} derrota \u{1F62D}')
        } else if (joKenPo[1].checked && jogadaPc == 2) {
            res.innerHTML += `O seu adversário lançou \u{270C} tesoura \u{270C}`
            res.innerHTML += `<br>\u{1F62D} Você <strong>perdeu</strong>! \u{1F62D}`
            partidas.push('\u{1F62D} derrota \u{1F62D}')
        } else if (joKenPo[2].checked && jogadaPc == 0) {
            res.innerHTML += `O seu adversário lançou \u{270A} pedra \u{270A}`
            res.innerHTML += `<br>\u{1F62D} Você <strong>perdeu</strong>! \u{1F62D}`
            partidas.push('\u{1F62D} derrota \u{1F62D}')
        }
        Contador()    
    }
}

function JogarNovamente(){
    let res = document.querySelector('section#res')
    let res2 = document.querySelector('section#res2')
    let botao1 = document.querySelector('input#botaoJogar')
    let botao2 = document.querySelector('input#botaoJogarNovamente')
    let botao3 = document.querySelector('input#botaoHistorico')
    botao1.setAttribute('style','display:inline')
    botao2.setAttribute('style','display:none')
    botao3.setAttribute('style','display:none')
    res.innerHTML = ''
    res2.innerHTML = ''
    partidas.length = 0
}

function Contador(){
    if(partidas.length <= 3){
        res.innerHTML += `<p> ${partidas.length}ª partida de 3.`
    }
}

function Resultado(){
    let res = document.querySelector('section#res2')
    let vitorias = 0
    let derrotas = 0
    let empates = 0
    res.innerHTML = ''
    if(partidas.length >= 3){
        for(let c in partidas){
            res.innerHTML += `<p>Na <strong>${Number(c) + 1}ª partida</strong> você obteve um(a) ${partidas[c]}.</p>`
            if(partidas[c] == '\u{1F3C6} vitória \u{1F3C6}'){
                vitorias ++
            } else if(partidas[c] == '\u{1F62D} derrota \u{1F62D}'){
                derrotas ++
            } else{
                empates ++
            }
            c ++
        }
        if(vitorias >= 2){
            res.innerHTML += `<p>Você venceu \u{1F3C6} a melhor de 3.<p>`
        } else if(derrotas >= 2){
            res.innerHTML += `<p>Você perdeu \u{1F62D} a melhor de 3.</p>`
        } else {
            res.innerHTML += `<p>Você empatou \u{1F610} a melhor de 3.</p>`
        }
    }
}*/