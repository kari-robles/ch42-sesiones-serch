console.log("Sesion JS01, tipos de datos");

/*
Tipos de datos de JavaScript:
- Objetos primitivos
- Los datos primitivos:
    *string
    *boolean
    *number
    *null
    *undefine
    *bigint
    *symbol
    > son inmutables, no tienen atributos ni metodos 

-Objetos:
    tipo object
    {clave: valor, edad:25, name: "pitufina"}
    tipo array 
    [element_1 , element_2 , "Pitufinas", 38 , {} , {} ]
*/

// ====== Datos primitivos =======0
/*
Tipo de datos string: "hola", "Ya mero es la 1", 'Dia azul'
        - String template literals (backtick) ``
*/
console.log( typeof "hola");
console.log(typeof "");
console.log( `El resultado es 3*4= ${3*4} pesos`);

/*
// tipos de datos number

-numeros positivos: 100, 1, 0.258
-numeros negativos: -1, .5035
-valores que no pueden ser representados numericamente: NaN
numeros infinitos: +Infinity, -Infinity
*/

console.log(typeof 3.141592);
console.log(typeof (3*3));
//typeof 9
console.log(typeof (3*"pitufo alegre")); 


// -----------CLASE 17 JUNIO 2024------------

// Conversión a String

const edadMascota = 10; // number

// Conversion implícita

console.log("Edad de mi mascota " + edadMascota); // "Edad de mi mascota: 10"

// Conversión explícita

const edadMascotaString = String( edadMascota ); // "10"

                                               // "Edad de mi mascota en String 10"

console.log("Edad de mi mascota en String " + edadMascotaString );

// Conversión a number
const costo = "100";
// Conversión implícita
const COSTOcONiva = COSTO *1.16; // 116.00

Conversión explícita
const precioCroquetas = "1000.50";
const precioJabon = "25";
const precioPApel = "40";

const total= precioCroquetas + precioJabon + precioPapel;// 1000.502540



const totalCorrecto = parseFloat ( precioCroquetas ) + parseInt (precioJabon )
+ Number (precioPapel);

/*
Number() Vs parseInt()
-Number convierte enteros y decímales
-parseInt convierte solo la parte entera
*/
console.log( parseInt("10.456")); // 10

console.log( parseFloat("10.456")); // 10.456

console.log( Number("10.456")); // 10.456

// - Number devuelve NaN si la cadena contiene algùn catacter no numérico

// - parseInt y parseFlotat realiza la conversión hasta encontrar un caracter

//   no numérico

// - con parseInt y parseFloat, si la entrada comienza con un valor no numérico

//   devuelve NaN
console.log (parseInt ("10-25")); // 10
console.log (Number("10-25")); // NaN

// Para convertir un tipo boolean a number se debe utilizar Number ()
console.log( Number(true)); // 1
console.log( Number(false)); // 0
console.log( Number(true)); // NaN

//Conversión a tipo boolean
//En la conversión a boolean los sisguientes valores son false:
//""(empty string),0,null, underfined
console.log(Boolean)(1) ); // true
console.log(Boolean)(1000) ); // true
console.log(Boolean)(-1000) ); // true
console.log(Boolean)("Ya mero terminamos, me duele la cabeza") ); // true
console.log(Boolean)("") ); // false
console.log(Boolean)(" ") ); // true
console.log(Boolean("0")); // true
console.log(Boolean(Number"0")); // false
// Boolean ( 0 );

console.log( 2 < 10); //true
console.log( "22" < 10); //false  , el valor del string se convierte e su numerico por eso es false

