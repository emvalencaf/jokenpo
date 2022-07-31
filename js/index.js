import { JoKenPoController } from "./Controller/Jokenpo.controller.js"
import { JoKenPoService } from "./Service/Jokenpo.service.js"
import { JoKenPoView } from "./View/Jokenpo.view.js"
import { JoKenPoModel } from "./Model/Jokenpo.model.js"

//módulos do jogo
    const joKenPoView = new JoKenPoView(
        document.querySelector('#res'),
        document.querySelector('#res2'),
        [...document.querySelectorAll("button")],
        [...document.querySelectorAll(".input-checkbox")]
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