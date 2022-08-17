// 1. Crear una función que reciba dos parámetros: cantidad y un arreglo de números. La función debera retornar un arreglo del tamaño definido en el parámetro cantidad con números aleatorios entre 1 y 100 que no se repitan y que no existan en el arreglo del segúndo parámetro. Agregue las validaciones que considere necesarias a los parámetros de entrada.

/**
 * It takes an array of numbers and returns an array of random numbers that are not in the original
 * array
 * @param cantidad - the number of random numbers you want to generate
 * @param arreglo - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * @returns array of random numbers
 */
function randomNumber(cantidad, arreglo) {
    let arregloRandom = [];
    let contador = 0;
    let numero = 0;
    while (contador < cantidad) {
        numero = Math.floor(Math.random() * 100) + 1;
        if (!arreglo.includes(numero)) {
            arregloRandom.push(numero);
            contador++;
        }
    }
    return arregloRandom;
}
console.log(randomNumber(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

