//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $boton = document.querySelector("#boton-calcular");

function calcularPromedio(listaNumeros) {
    let sumaNumeros = 0;

    for (i = 0; i < listaNumeros.length; i++) {
        sumaNumeros += Number(listaNumeros[i].innerText);
    }

    return (sumaNumeros /= listaNumeros.length);
}

function encontrarNumeroMayor(listaNumeros) {
    let numeroMayor = 0;

    for (i = 0; i < listaNumeros.length; i++) {
        numeroMayor < Number(listaNumeros[i].innerText)
            ? (numeroMayor = Number(listaNumeros[i].innerText))
            : numeroMayor;
    }

    return numeroMayor;
}

function encontrarNumeroMenor(listaNumeros) {
    let numeroMenor = Number(listaNumeros[0].innerText);

    for (i = 1; i < listaNumeros.length; i++) {
        numeroMenor > Number(listaNumeros[i].innerText)
            ? (numeroMenor = Number(listaNumeros[i].innerText))
            : numeroMenor;
    }

    return numeroMenor;
}

function encontrarMasRepetido(array) {
    let numero = Number(array[0].innerText);
    let cuentaArray = {};

    for (i = 0; i < array.length; i++) {
        const actual = Number(array[i].innerText);

        if (cuentaArray[actual]) cuentaArray[actual]++;
        else cuentaArray[actual] = 1;

        if (cuentaArray[numero] < cuentaArray[actual]) numero = actual;
    }

    return {
        cantidad: cuentaArray[numero],
        numero: numero,
    };
}

$boton.onclick = function () {
    const $lista = document.querySelectorAll("li");

    let promedio = calcularPromedio($lista);

    document.querySelector("#resultado-promedio").innerText = `El promedio de la lista es: ${promedio}.`;

    let numeroMayor = encontrarNumeroMayor($lista);

    document.querySelector("#resultado-numero-mayor").innerText = `El numero mas alto de la lista es: ${numeroMayor}.`;

    let numeroMenor = encontrarNumeroMenor($lista);

    document.querySelector("#resultado-numero-menor").innerText = `El numero mas bajo de la lista es: ${numeroMenor}.`;

    let numeroMasRepetido = encontrarMasRepetido($lista);

    document.querySelector(
        "#resultado-numero-repetido"
    ).innerText = `El numero mas repetido de la lista es: ${numeroMasRepetido.numero} y se repitio ${numeroMasRepetido.cantidad} veces.`;

    return false;
};
