/*
-creamos una variable para guardar la cadena resultante
-obtener el número de caracteres
-definir un rango numérico que determine el código asccii de los caracteres que estaran disponibles
-obtener de forma aleatoria algún número dentro de ese rango
-obtener el caracter correspondiente al número seleccionado
-almacenamos en una variable el caracter obtenido

-evaluamos si el caracter existe en la cadena de resultado
--si el caracter no existe, lo agregamos a la cadena de resultado
--si el caracter existe en la cadena, debemos generar un nuevo caracter
-repetir n veces
-devolver la cadena de resultado
*/

//var n = parseInt( prompt("Qué longitud debe tener el string? "))

function createRandomString ( charactersQty ){
    var result = ""
    /* rango: 48 - 90*/
    //evaluateCharacter( result )  
    for( i = 0; i < charactersQty; i++ ){
        result = evaluateCharacter( result ) //false
    }
    console.log('result ', result)
    console.log('length ', result.length )
}




function evaluateCharacter( completeString ){
    //debugger

    console.log('completeString', completeString )
    var characterCode = Math.floor( Math.random() * (91 - 48) + 48 )
    var character = String.fromCharCode( characterCode )
    if( !completeString.includes(character) ){
        completeString += character
        
    } else {
        console.log( "repeated" )
        evaluateCharacter( completeString )
        return
    }
   // console.log( completeString )
   return completeString
}