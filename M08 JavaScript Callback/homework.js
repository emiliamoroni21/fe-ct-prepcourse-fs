/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   //let primeraLetra = nombre.chartAt(0);
   //let primeraLetraMayuscula = primeraLetra.toUpperCase();
   //let nombreCompleto = nombre.slice(1,nombre.length);
   //let stringNuevo = primeraLetraMayuscula + nombreCompleto;
  // return stringNuevo;
  let nombreCortado = nombre.split("");
  let nuevaMayuscula = nombreCortado[0].toUpperCase();
  nombreCortado.shift();
  nombreCortado.unshift(nuevaMayuscula);
  let resultadoPalabra = nombreCortado.join("");
  return resultadoPalabra;
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   let resultado = cb(num1, num2);
   return resultado;
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes retornar nada.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++){
      const numeritos = arrayOfNumbers[i];
      suma = suma + numeritos;
   }
   cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   array.forEach(cb);
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   let newArray = [];
   newArray = array.map(cb);


   return newArray;
  

}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let elementos = [];
   for (let i = 0; i < arrayOfStrings.length; i++){
      if (arrayOfStrings[i].charAt(0) === "a"){
         elementos.push(arrayOfStrings[i]);
      }
   }
   return elementos;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
