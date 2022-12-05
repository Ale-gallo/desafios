ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
//No modificar los valores de estos objetos hasta el final del desafío

const jugadorUno = {
  nombre: "Marce",
  habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 60,
    magia: 120,
  },
  articulos: ["espada", "escudo", "varita"],
};

const jugadorDos = {
  nombre: "Flor",
  habilidades: {
    ataque: 73,
    velocidad: 30,
    vida: 80,
    magia: 100,
  },
  articulos: ["escudo", "varita", "capa", "pocion"],
};

//-----------------------------------------------------------------------//

//PUNTOS INICIALES DEL JUEGO:
//Estas variables servirán para almacenar los puntos ganados por cada jugador.
//Cada vez que un jugador gana en una habilidad determinada se deberá
//sumar 1 punto en el contador correspondiente:
var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

//Ganador:
var ganador;

//-----------------------------------------------------------------------//

//COMPARACIÓN POR PODER DE ATAQUE

//La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
//contador. Según la condición que se cumpla, se irán sumando los puntos.

//EJEMPLO ESTRUCTURA DE COMPARACIÓN
// aca comparamos cada una de las habilidades
//ATAQUE
if (jugadorUno.habilidades.ataque> jugadorDos.habilidades.ataque) {//si gana el jugador 1
  contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorDos.habilidades.ataque > jugadorUno.habilidades.ataque ) {//si gana jugador 2
  contadorPuntosJug2++;
} else {// aca si empatan
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

//MAGIA
if (jugadorUno.habilidades.magia> jugadorDos.habilidades.magia) {//si gana el jugador 1
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorDos.habilidades.magia > jugadorUno.habilidades.magia ) {//si gana jugador 2
    contadorPuntosJug2++;
  } else {// aca si empatan
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
  //VELOCIDAD
  if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {//si gana el jugador 1
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorDos.habilidades.velocidad > jugadorUno.habilidades.velocidad ) {//si gana jugador 2
    contadorPuntosJug2++;
  } else {// aca si empatan
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
  //VIDA
  if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {//si gana el jugador 1
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorDos.habilidades.vida > jugadorUno.habilidades.vida ) {//si gana jugador 2
    contadorPuntosJug2++;
  } else {// aca si empatan
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  
// (Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR VELOCIDAD:
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR NIVEL DE VIDA:
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR MAGIA:
//(Escribir debajo el código que te permita generar esta comparación)

//-----------------------------------------------------------------------//

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
//(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.articulos.length > jugadorDos.articulos.length) {//si gana el jugador 1
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorDos.articulos.length > jugadorUno.articulos.length ) {//si gana jugador 2
    contadorPuntosJug2++;
  } else {// aca si empatan
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
//-----------------------------------------------------------------------//

//DEFINIENDO EL GANADOR DE LA PARTIDA
//En este espacio deberás generar la comparación final de puntos
//que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

if (contadorPuntosJug1 < contadorPuntosJug2){
    nombreDeJug = contadorPuntosJug2;
    }
    else if  (contadorPuntosJug2 < contadorPuntosJug1){
        nombreDeJug = contadorPuntosJug1;
    }
    else {
        nombreDeJug= contadorPuntosJug1, contadorPuntosJug2 ;
       }
    
// ejemplo:
 var resultado = {
  [Marce]: contadorPuntosJug1,
  [Flor]: contadorPuntosJug2,
  ganador: nombreDeJug
 }
 console.log(resultado)
//-----------------------------------------------------------------------//
@Ale-gallo
 