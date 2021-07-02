let someObject = {
    name:"x",
    lastName:"y"
}

let nombre="Eduardo"
let apellidos ="Pérez"

/*function Person( name, lastName, age ){
    this.name = name
    this.lastName = lastName
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.`
    this.saludar = function(){
        console.log(`hola, soy ${this.name} ${this.lastName}`)
    }
    let edad = age ? `${age} años` : "no disponible"
    return edad
}*/

const Person = ( name, lastName, age ) => {
    this.name = name
    this.lastName = lastName
    this.initials = `${this.name.charAt(0).toUpperCase()}. ${this.lastName.charAt(0).toUpperCase()}.`
    this.saludar = function(){
        console.log(`hola, soy ${this.name} ${this.lastName}`)
    }
    let edad = age ? `${age} años` : "no disponible"
}

function frankenstein( nombre, apellidos, edad ){
    let result = {}
    result.name = nombre
    this.lastName = apellidos
    result.age = edad
    result.saludar = function(){
        alert( "saludar")
    }
    return result 
}

let persona1 = new Person( nombre, apellidos )
let persona2 = new Person( "Wendy", "Ortega")

console.log( persona1 )
console.log( persona2 )



let franky = new frankenstein("monstruo", "de frankstein", 500)

console.log( franky )

