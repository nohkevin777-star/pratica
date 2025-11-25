// Función para sumar dos números con comentarios explicativos línea por línea

// Definimos una función llamada 'sumar' que recibe dos parámetros: 'a' y 'b'
function sumar(a, b) {
	// 'a' y 'b' son los valores que se pasan cuando llamamos a la función.
	// Pueden ser números o cadenas que representen números.

	// Convertimos 'a' a número para evitar que, si es una cadena, se haga concatenación.
	// Number(...) intenta convertir el valor a un número; si no puede, devuelve NaN.
	a = Number(a);

	// Hacemos lo mismo con 'b'.
	b = Number(b);

	// Ahora que ambos son valores numéricos (o NaN si la conversión falló),
	// sumamos 'a' y 'b' y guardamos el resultado en la variable 'resultado'.
	var resultado = a + b;

	// Devolvemos el valor de 'resultado' al código que llamó a la función.
	return resultado;
}

// ¿Qué es una variable? Analogía con cajas de mudanza:
//
// Imagina que vas a mudarte y tienes muchas cajas. Cada caja tiene una etiqueta
// en la que escribes para saber qué contiene (por ejemplo: "libros", "ropa").
// En programación, una variable es como esa caja.
// - El nombre de la variable es la etiqueta de la caja.
// - El valor que guardas en la variable es lo que pones dentro de la caja.
// - Puedes cambiar el contenido de la caja sin cambiar su etiqueta.
//
// Ejemplo práctico en código (sintaxis básica, sin ES6):
// Declaramos una variable llamada 'caja' y le ponemos un valor inicial.
var caja = 'libros';

// Más tarde, podemos cambiar lo que hay dentro de la misma caja:
caja = 'ropa';

// Imprimir el contenido actual de la caja:
// console.log(caja); // Imprime 'ropa'

// Ejemplos de uso:
// Llamada con números:
// console.log( sumar(2, 3) ); // Imprime 5

// Llamada con cadenas que contienen números (la función las convierte):
// console.log( sumar('2', '3') ); // Imprime 5

// Si se pasan valores no convertibles a número, el resultado será NaN:
// console.log( sumar('hola', 3) ); // Imprime NaN