export class JoKenPoController{
    constructor(view, service){
        this.view = view
        this.service = service
    }

    definirJogada(jogada){
        if(this.service.partidas === 3) return this.view.renderizarBtns()

        const resultado = this.service.definirJogada(jogada)

        this.view.renderizarResultado(resultado)

        this.registrarPartidas(resultado)
    }

    definirNovoJogo(){
        if(this.service.partidas !== 3) return console.log("você ainda não terminou a melhor de 3")

        this.service.apagarHistorico()
        this.service.partidas = this.service.partidasRegistros.registros.length
        
        this.view.renderizarBtns()
    }

    mostrarHistorico(){
        this.service.pegarHistorico()
        this.view.renderizarHistorico(this.service.partidasRegistros)
    }

    registrarPartidas({player, pc}){
        console.log(player, pc)
        this.service.pegarHistorico()
        this.service.registrarNovaPartida(player,pc)
    }
}