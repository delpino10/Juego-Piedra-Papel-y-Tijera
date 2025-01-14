const valores = ['piedra', 'papel', 'tijera'];
const indiceRandom = Math.floor(Math.random() * valores.length)
const maquina = valores[indiceRandom]
let jugador =''

let contMaquina = 0
let contJugador = 0
let contEmpate = 0

const marcadorMaq = document.getElementById('marcadorMaq')
const marcadorJug = document.getElementById('marcadorJug')
const empate = document.getElementById('empate')

const piedra = document.getElementById('piedra')
const papel = document.getElementById('papel')
const tijera = document.getElementById('tijera')

const imgMaquina = document.getElementById('selectMaq')
const imgJugador = document.getElementById('selectJugador')
const campoJug = document.getElementById('campoJug');
const campoMaq= document.getElementById('campoMaq');

const res = document.getElementById('res')

piedra.addEventListener("click", () => {
    jugador = 'piedra'
    imgMaquina.src = `../images/${maquina}.png`;
    imgJugador.src = '../images/piedraA.png'
    resultado(maquina, jugador)
    marcadorJug.textContent = contJugador
    marcadorMaq.textContent = contMaquina
    empate.textContent = contEmpate

})
papel.addEventListener("click", () => {
    jugador = 'papel'
    imgMaquina.src = `../images/${maquina}.png`;
    imgJugador.src = '../images/papelA.png'
    resultado(maquina, jugador)
    marcadorJug.textContent = contJugador
    marcadorMaq.textContent = contMaquina
    empate.textContent = contEmpate
})
tijera.addEventListener("click", () => {
    jugador = 'tijera'
    imgMaquina.src = `../images/${maquina}.png`;
    imgJugador.src = '../images/tijeraA.png'
    resultado(maquina, jugador)
    marcadorJug.textContent = contJugador
    marcadorMaq.textContent = contMaquina
    empate.textContent = contEmpate
})


function resultado(maquina, jugador){

    campoMaq.style.background = "none"
    campoJug.style.background = "none"
    if(maquina === jugador){
        contEmpate++;
        return res.innerHTML = 'Es un empate!'
    }

    if(
        (maquina === 'piedra') && (jugador === 'tijera')
        || (maquina === 'tijera') && (jugador === 'papel')
        || (maquina === 'papel') && (jugador === 'piedra')
    ){
        campoMaq.style.background = "red"
        campoJug.style.background = "none"
        contMaquina++;
        return res.innerHTML = 'La máquina gana...'
    }else{
        campoMaq.style.background = "none"
        campoJug.style.background = "green"
        contJugador++;
        return res.innerHTML = '¡Ganaste!'
    }

}
