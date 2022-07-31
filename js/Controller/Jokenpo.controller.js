export class JoKenPoController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    definirJogada(jogada){
        if(this.service.partidas === 3) return this.view.renderizarBtns()

        const resultado = this.service.definirJogada(jogada)
        this.view.renderizarResultado(resultado)
    }

    definirNovoJogo(){
        if(this.service.partidas !== 3) return console.log("você ainda não terminou a melhor de 3")

        this.service.partidas = 0
        this.view.renderizarBtns()
    }

    mostrarHistorico(){
        this.view.renderizarHistorico()
    }
}