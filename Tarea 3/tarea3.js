//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $boton = document.querySelector("#boton-calcular");

$boton.onclick = function () {
    const $horasVideos = document.querySelectorAll(".horas");
    const $minutosVideos = document.querySelectorAll(".minutos");
    const $segundosVideos = document.querySelectorAll(".segundos");

    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    for (i = 0; i < $segundosVideos.length; i++) {
        segundosTotales += Number($segundosVideos[i].value);
    }

    minutosTotales = Math.floor(segundosTotales / 60);
    segundosTotales %= 60;

    for (i = 0; i < $minutosVideos.length; i++) {
        minutosTotales += Number($minutosVideos[i].value);
    }

    horasTotales = Math.floor(minutosTotales / 60);
    minutosTotales %= 60;

    for (i = 0; i < $horasVideos.length; i++) {
        horasTotales += Number($horasVideos[i].value);
    }

    document.querySelector(
        "#resultado"
    ).innerText = `La duracion del curso hasta ahora es de ${horasTotales} horas, ${minutosTotales} minutos, y ${segundosTotales} segundos.`;
};
