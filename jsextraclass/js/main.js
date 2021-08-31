
/*$(".content-wrapper").load("views/home.html", () => {
    $(".btn-danger").click( () => {
        alert("significa peligro!!!")
    })
})

console.log( "hola")

let greeting = "foo"

const greet = () => {
    console.log( "hola de nuevo" )
}*/


// setTimeout( () => {
//     console.log( "tarea 2")
// },3000)

// console.log( "tarea 1")

let availableTags = [
    "css",
    "js",
    "jquery"
]

$(".navbar-nav .nav-link").click( event => {
    let path = $(event.target).data("view-url")

    console.log( path )

    $(".content-wrapper").load(`views/${path}.html`)
})

const getTags = () => {
    let tagsString = $("#tag-input").val()
    console.log(tagsString)
    tagsString = tagsString.replace(/ /gi,"")
    console.log( tagsString )
    let tagsArray = tagsString.split(",")
    console.log(tagsArray)
}

$("#get-tags").click(getTags)

$(".tag-popup").text(`Sugerencias: ${ availableTags.join()}`)

let kodersData = {
    koder1:{
        name:"Salvador",
        lastName:"Jiménez",
        generation:"12g",
        score:7
    },
    koder2:{
        name:"Itzi",
        lastName:"Del Toro",
        generation:"10g",
        score:10
    },
    koder3:{
        name:"Rurick",
        lastName:"Maqueo",
        generation:"4g",
        score:8
    },
    koder4:{
        name:"Wendy",
        lastName:"Ortega",
        generation:"12g",
        score:8
    },
    koder5:{
        name:"Jorge",
        lastName:"Ochoa",
        generation:"4g",
        score:9
    },
    koder6:{
        name:"Rose",
        lastName:"Ortega",
        generation:"3g",
        score:10
    }
}

/* crear una función que devuelva un array con strings de la siguiente forma:
[
    "Hola, soy {name} {lastName} y pertenezco a la {generation}"
    ...
    ...
    ...
]
*/

const createLabelsArray = ( data ) => {
    let labelsArray = []
    for( key in data ){
        let koderObject = data[key] //{name:"asdfasd", lastName:"asdfasdf", generation:"asdfasdf"}
        let { name, lastName, generation } = koderObject
        let labelString = `Hola, soy ${name} ${lastName} y pertenezco a la ${generation}`

        //console.log( labelString )
        labelsArray.push( labelString )
    }
    return labelsArray
}

let kodersLabels = createLabelsArray( kodersData )
console.log( kodersLabels )

/*Crear una función que devuelva un arreglo con los nombres de las generaciones sin <repetir></repetir>

/*
[
    "4g",
    "10g",
    "12g"
]*/

const getNonRepeatedGenerations = ( data ) => {
    let generationsArray = []
    for( key in data ){
        let koderObject = data[key]
        let { generation } = koderObject

        !generationsArray.includes( generation ) && generationsArray.push( generation )
    }
    return generationsArray
}

let nonRepeatedGenerations = getNonRepeatedGenerations( kodersData )

/*[
    "4g",
    "10g",
    "12g"
]*/

console.log( nonRepeatedGenerations )

/**
 * 
 1) recorrer el arreglo de generaciones que no se repiten
 2) para obtener el valor de la generación dentro del array
 3) construir el elemento HTML
 3) inyectar en el select como un elemento option del HTML
 */

 const optionsSelect = generationsArray =>{
    let select = $("#generation-select")
     generationsArray.forEach(generation => {
        let option = `<option value="">${generation}</option>`
        select.append(option)
     });
 }
optionsSelect(nonRepeatedGenerations) 

/*crear una función que devuelva el score promedio de los koders*/

const getKodersAverage = data => {
    let valuesArray = Object.values( data )
    let scoresTotal = valuesArray.reduce( ( accum, item ) => {
        return accum + item.score
    },0)

    let average = scoresTotal / valuesArray.length 
    return average
}

let kodersAverage = getKodersAverage( kodersData )

console.log( kodersAverage )