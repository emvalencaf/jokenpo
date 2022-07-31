export class JoKenPoService{
    constructor(partidas){
        this.partidasN = partidas
        this.partidas = 0
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
        this.partidasN.partidas[`${resultado}s`].push({
            player: jogada.id,
            pc:pcJogada
        })
        console.log(this.partidasN)
        return {
            player: jogada.id,
            pc: pcJogada,
            resultado: resultado,
            partida: this.partidas
        }
    }

    definirJogadaAdv(){
        return Math.floor((Math.random() * 3))
    }

    analisarResultado(player, pc){

        if(player === pc) return "empate"

        let resultado = ""

        for(let prop in this.outcome){

            this.outcome[prop].forEach(resultado=>{
                if(resultado.player === player && resultado.pc === pc) return resultado = "vitoria"

                return resultado = "derrota"
            })
        }
        return resultado
    }
}