export class JoKenPoService{
    constructor(registros){
        this.partidasRegistros = registros
        this.partidas = this.partidasRegistros.registros.length
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
        const resultado = this.analisarResultado(jogada.id, pcJogada, this.outcome)

        const obj = {
            player: jogada.id,
            pc: pcJogada,
            resultado: resultado
        }

        this.registrarNovaPartida(obj)      
        return obj
    }

    definirJogadaAdv(){
        return Math.floor((Math.random() * 3))
    }

    analisarResultado(player, pc, gameset){

        if(player === pc) return "empate"

        let outcome = ""

        gameset.vitoria.forEach(resultado=>{
            
            if(resultado.player === player && resultado.pc === pc) return outcome = "vitoria"

        })

        if(!outcome) return outcome = "derrota"

        return outcome
    }

    pegarHistorico(){
        this.partidasRegistros.registros = JSON.parse(sessionStorage.getItem("partidas")) || []
        this.partidas = this.partidasRegistros.registros.length
    }

    registrarNovaPartida({player, pc}){

        this.pegarHistorico()
        this.partidasRegistros.registros.push({player, pc, date: Date.now()})
        this.partidas = this.partidasRegistros.registros.length

        sessionStorage.setItem("partidas",JSON.stringify(this.partidasRegistros.registros))


    }

    apagarHistorico(){
        sessionStorage.removeItem("partidas")
        this.pegarHistorico()
    }
}