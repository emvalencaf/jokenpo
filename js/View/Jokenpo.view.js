export class JoKenPoView{
    constructor(res1, res2, btns, chkbx){
        this.resJogo = res1
        this.resHist = res2
        this.btns = btns
        this.checkboxs = chkbx
        this.emojis = {
            tesoura:"\u{270C}",
            papel:"\u{1F590}",
            pedra:"\u{270A}",
            empate:"\u{1F610}",
            vitoria:"\u{1F3C6}",
            derrota:"\u{1F62D}"
        }

    }
    renderizarCheckbox(selecionado){

        selecionado.classList.add("active")
        this.checkboxs.forEach(chkbx =>{
            if(!chkbx.checked) chkbx.parentElement.classList.remove("active")
        })
    }
    limparRenderizacao(){
        this.resJogo.innerHTML = ""
        this.resHist.innerHTML = ""
    }
    renderizarBtns(){
        this.limparRenderizacao()
        this.btns.forEach(btn => btn.classList.toggle("btn-inativo"))
    }

    renderizarResultado({player, pc, resultado}, partida){
        this.limparRenderizacao()
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

    renderizarHistorico(historico, cb, gameset){
        this.limparRenderizacao()

        if(!typeof cb === "function") throw new Error("é precisso passar uma função de call-back a essa função")

        const regex = /e$/
        const html = historico.map((partida, i) =>{
            const resultado = cb(partida.player, partida.pc, gameset)
            return`
            <p>
            ${this.emojis[resultado]}Na ${++i}ª partida você jogou ${partida.player} e seu adversário ${partida.pc}. O resultado foi ${regex.test(resultado)? "um":"uma"} <strong>${resultado === "vitoria"? "vitória":resultado}</strong>${this.emojis[resultado]}.
            </p>
            `
        }).join("")

        this.resHist.innerHTML = html
    }
}