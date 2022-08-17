// 2. Crear una función que reciba 4 parámetros: nombre, cédula, teléfono y email. La función debe validar que el nombre esté compuesto por al menos tres palabras y que cada una empieza en mayúscula. La cédula debe ser mayor a 1000000000. El teléfono debe iniciar por 3 y debe tener una longitud de 10 dígitos. El email debe ser válido. La función retornará el resultado de la validación en formato JSON.

/**
 * It takes in four parameters, and returns an object with four properties, each of which is a boolean
 * @param nombre - String
 * @param cedula - a number
 * @param telefono - a number
 * @param email - a string
 * @returns An object in JSON format with four properties, each of which is a boolean
 */
 function validar(nombre, cedula, telefono, email) {
    let validacion = {
        nombre: false,
        cedula: false,
        telefono: false,
        email: false
    }
    let nombreSplit = nombre.split(' ');
    if (nombreSplit.length > 2) {
        validacion.nombre = true;
        for (let i = 0; i < nombreSplit.length; i++) {
            if (nombreSplit[i].charAt(0) != nombreSplit[i].charAt(0).toUpperCase()) {
                validacion.nombre = false;
            }
        }
    }
    if (cedula > 1000000000) {
        validacion.cedula = true;
    }
    if (telefono.toString().charAt(0) === '3' && telefono.toString().length >= 10) {
        validacion.telefono = true;
    }
    if (email.includes("@")) {
        validacion.email = true;
    }
    return validacion;
}
console.log(validar("Juan Maria Gómez", 1000000001, 3123456789, "juan@gmail.com")); 