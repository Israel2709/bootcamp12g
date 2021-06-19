var numberOne = 3
var numberTwo = 5

//console.log( numberOne )

/*var result = numberOne + numberTwo
console.log( result )*/

function sumarDosNumeros( numero1, numero2 ){
    //console.log( 'numberOne ', numberOne )
    var resultado = numero1 + numero2
    //console.log( resultado )
    return resultado
}

function evaluarSiEsMayor( numero1, numero2 ){
    var result;
    if( numero1 > numero2 ){
        result = true
    } else {
        result = false 
    }
    var foo
    var bar

    return [result, foo, bar]
}

var suma = sumarDosNumeros( 4, 9 )
console.log( suma )

//sumarDosNumeros( 3, 4 )

//console.log( resultado )

//console.log( sumarDosNumeros(3,4) )

/*
var valor1 = parseInt(prompt("ingresa el primer número "))
var valor2 = parseInt(prompt("ingresa el segundo número "))

sumarDosNumeros( valor1, valor2 )
*/



/*
    solicitar nombre y apellidos al usuario
    guardar el nombre en una variable
    guardar el apellido en una variable
    transformar el nombre a minusculas
    transformar el apellido a mayúsculas
    juntar el nombre y el apellido transformados en un sólo texto
    devolver ese texto como resultado
    */

var nombre = prompt("nombre")
var apellidos = prompt("apellidos")

console.log( convertirNombre(nombre, apellidos) )

function convertirNombre(nombre, apellidos){
    var nombreTransformado = nombre.toLowerCase()
    var apellidosTransformados = apellidos.toUpperCase()
    var nombreCompleto = nombreTransformado + " " +apellidosTransformados
    return nombreCompleto
} 

