export class JoKenPoView{
    constructor(res1, res2, btns){
        this.resJogo = res1
        this.resHist = res2
        this.btns = btns
        this.emojis = {
            tesoura:"\u{270C}",
            papel:"\u{1F590}",
            pedra:"\u{270A}",
            empate:"\u{1F610}",
            vitoria:"\u{1F3C6}",
            derrota:"\u{1F62D}"
        }

    }
    
    renderizarBtns(){
        this.btns.forEach(btn => btn.classList.toggle("btn-inativo"))
    }

    renderizarResultado({player, pc, resultado, partida}){
        const regex = /e$/
        const html = `
            <p>
                Você jogou ${this.emojis[player]} e o seu adversário ${this.emojis[pc]}.
            </p>
            <p>
                ${this.emojis[resultado]} Você obteve ${regex.test(resultado)? "um":"uma"} <strong>${resultado === "vitoria"? "vitória":resultado}</strong> ${this.emojis[resultado]}.
            </p>
            <p>
                Essa é a ${partida}ª partida de uma melhor de 3.
            </p>
        `
        this.resJogo.innerHTML = html
    }
    renderizarHistorico(){
        console.log("renderizando o histórico das três partidas")
    }
}