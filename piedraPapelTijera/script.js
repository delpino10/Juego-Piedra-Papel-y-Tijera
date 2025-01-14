const valores = ['piedra', 'papel', 'tijera'];
let contMaquina = 0;
let contJugador = 0;
let contEmpate = 0;

const marcadorMaq = document.getElementById('marcadorMaq');
const marcadorJug = document.getElementById('marcadorJug');
const empate = document.getElementById('empate');

const piedra = document.getElementById('piedra');
const papel = document.getElementById('papel');
const tijera = document.getElementById('tijera');

const container = document.getElementById('container')
const imgMaquina = document.getElementById('selectMaq');
const imgJugador = document.getElementById('selectJugador');
const campoJug = document.getElementById('campoJug');
const campoMaq = document.getElementById('campoMaq');
const res = document.getElementById('res');
const resFinal = document.getElementById('resFinal')

// Mostrar mensajes según el ganador
function verificarGanador() {
    // Reseteamos el color del borde
    container.style.border = '2px solid #fddc00'
    // Vaciamos el contenido del mensaje final
    resFinal.textContent = '';
    if (contJugador >= 3) {
        resFinal.textContent = '¡Ganaste la partida!';
        container.style.border = '2px solid #75fe08'
        reiniciarMarcadores();
    } else if (contMaquina >= 3) {
        resFinal.textContent = 'La Máquina ganó la partida';
        container.style.border = '2px solid #f80860'
        reiniciarMarcadores();
    } else if (contEmpate >= 3) {
        resFinal.textContent = 'Empate. Los dos a casa';
        container.style.border = '2px solid #fff'
        reiniciarMarcadores();
    }
}

// Reiniciar los marcadores a cero
// cuando algún jugador gana tres rondas
function reiniciarMarcadores() {
    contJugador = 0;
    contMaquina = 0;
    contEmpate = 0;
    actualizarMarcadores();
}

// La selección del jugador y la elección aleatoria de la máquina
function manejarSeleccion(jugador) {
    // obtiene un número entre 1 y 3
    const indiceRandom = Math.floor(Math.random() * valores.length);
    // El índice indica que valor elige la máquina dentro de array valores
    const maquina = valores[indiceRandom];
    // Las imágenes qa mostrar según la elección de cada jugador
    imgMaquina.src = `images/${maquina}.png`;
    imgJugador.src = `images/${jugador}A.png`;

    // Llamamos a la función para empezar a jugar
    resultado(maquina, jugador);
    // Actualiza los marcadores
    actualizarMarcadores();
    // Verifica si algún jugador ha ganado 3 rondas
    // Muestra el mensaje correspondiente
    verificarGanador();
}

// Actualiza los marcadores en la interfaz
function actualizarMarcadores() {
    marcadorJug.textContent = contJugador;
    marcadorMaq.textContent = contMaquina;
    empate.textContent = contEmpate;
}

// Algoritmo para el desarrollo del juego
function resultado(maquina, jugador) {
    campoMaq.style.background = "none";
    campoJug.style.background = "none";

    // Sí hay una misma elección
    if (maquina === jugador) {
        contEmpate++;
        res.textContent = '¡Es un empate!';
        return;
    }

    // Piedra gana a tijera
    // Tijera gana a papel
    // Papel gana a piedra
    if (
        (maquina === 'piedra' && jugador === 'tijera') ||
        (maquina === 'tijera' && jugador === 'papel') ||
        (maquina === 'papel' && jugador === 'piedra')
    ) {
        campoMaq.style.background = "#f80860";
        contMaquina++;
        res.textContent = 'La máquina gana esta ronda...';
    } else {
        campoJug.style.background = "#75fe08";
        contJugador++;
        res.textContent = '¡Ganaste esta ronda!';
    }

}

// Asignar eventos a botones
piedra.addEventListener("click", () => manejarSeleccion('piedra'));
papel.addEventListener("click", () => manejarSeleccion('papel'));
tijera.addEventListener("click", () => manejarSeleccion('tijera'));






