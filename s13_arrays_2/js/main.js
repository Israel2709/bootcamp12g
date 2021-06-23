/*function sumar( a, b ){
  return a + b
}*/

//let result1 = sumar(4,5)

/*let result1 = function(a,b){
  return a + b 
}

console.log( result1( 4, 9) )*/

/*const sumar = ( a, b ) => {
  return a + b
}*/

const sumar = ( a, b ) => a + b

//console.log( sumar( 4, 8) )

let result = sumar( 7 , 2 )

console.log( result )

let someArray = [
  "Israel Salinas",
  "David Moranchel",
  "Carlos Silva",
  "Michael Villalba"
]

//splitNames tomará un array de strings
const splitNames = ( namesArray ) => {
  //Creará un nuevo array*/
  let splittedNames = []
  //y recorrerá cada uno de los items del array original ( namesArray )
  for( let i = 0; i < namesArray.length; i++ ){
    //por cada items
    //dividirá el string en palabras ( split(" ") ) y agregará el resultado al nuevo array ( splittedNames)
    splittedNames.push( namesArray[i].split(" ") )
  }

  //al final devolveremos el nuevo array con los nombres divididos( splittendNames )
  return splittedNames 
}

//let otherArray = splitNames( someArray )

//console.log( otherArray )

//print items recibe un array
const printItems = ( array ) => {
  //e imprime cada uno de los items de ese array 
  for( let i = 0; i < array.length; i++ ){
    console.log( array[i])
  }
}

/*const sumar = ( a, b ) => {
  return a + b 
}*/




printItems( someArray )

//ejecutamos printItems usando como argumento el array que retorna splitNames
printItems( splitNames( someArray ) /*[[],[],[]]*/) 


let namesArray = [
    "Israel Salinas",
    "David Moranchel",
    "Carlos Silva",
    "Michael Villalba"
  ]
  /*regrese un número aleatorio desde 0 hasta array.length*/
  
  /*const getRandomIndex = array => {
    return Math.floor( Math.random( ) * array.length )
  }*/
  
  const getRandomIndex = array => Math.floor( Math.random( ) * array.length )
  
  let randomIndex = getRandomIndex( namesArray )
  //console.log( randomIndex )
  
  /*const printNameByIndex = index => {
    return namesArray[index]
  }*/
  
  const printNameByIndex = ( indexToFind, arrayToSearch )  => arrayToSearch[indexToFind]
  
  let someName = printNameByIndex( getRandomIndex( namesArray ) , namesArray )
  console.log( someName )
  
  
  
  const sumar = ( a, b ) => a + b
  
  let myObject = {
    name:"Ikki",
    alias:"El pájaro Dev"
  }
  
  let birdName = myObject.name
  let birdAlias = myObject.alias
  
  /*destructuring*/
  
  let { birdName:name, birdAlias:alias } = myObject
  
  console.log( birdName, birdAlias)
  
  
  
  
  //const results = {}
  //console.log( results )
  
  //results.result1 = sumar(2 , 2)
  //results.result2 = sumar(2 , 6)
  
  //console.log( results )
  
  const results = { result1:sumar(2,2), result2: sumar(2,6) }
  console.log( results )
  
  let firstname = "israel"
  let lastName = "salinas martínez"
  let age = 31
  
  let person = { name:firstname, lastName, age }
  
  console.log( person )