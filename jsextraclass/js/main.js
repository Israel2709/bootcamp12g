
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






