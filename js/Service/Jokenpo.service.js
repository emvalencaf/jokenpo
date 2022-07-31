export class JoKenPoService{
    constructor(registros){
        this.partidas = 0
        this.partidasRegistros = registros
        this.outcome = {
            vitoria:[
                {
                    player:"tesoura",
                    pc:"papel"
                },
                {
                    player:"papel",
                    pc:"pedra"
                },
                {
                    player:"pedra",
                    pc:"tesoura"
                }
            ]
        }
    }

    definirJogada(jogada){
        
        const jogadas = ["tesoura", "papel", "pedra"]
        const pcJogada = jogadas[this.definirJogadaAdv()]
        const resultado = this.analisarResultado(jogada.id, pcJogada)

        ++this.partidas

        const obj = {
            player: jogada.id,
            pc: pcJogada,
            resultado: resultado,
            partida: this.partidas
        }

        return obj
    }

    definirJogadaAdv(){
        return Math.floor((Math.random() * 3))
    }

    analisarResultado(player, pc){

        if(player === pc) return "empate"

        let outcome = ""

        this.outcome.vitoria.forEach(resultado=>{
            
            if(resultado.player === player && resultado.pc === pc) return outcome = "vitoria"

        })

        if(!outcome) return outcome = "derrota"

        return outcome
    }

    pegarHistorico(){
        const registros = JSON.parse(sessionStorage.getItem("partidas")) || []
        this.partidasRegistros = registros
        console.log("resgatando histórico", this.partidasRegistros.registros)
    }

    registrarNovaPartida(player, pc){
        console.log("novo registro", player, pc)
    }

    apagarHistorico(){
        sessionStorage.removeItem("partidas")
    }
}