let count = 0;

/*let botonArriba = document.getElementById("increment")

botonArriba.addEventListener("click", () => {
    console.log("click")
    count++

    document.getElementById("counter").textContent = count
    console.log( count )
})

let botonAbajo = document.getElementById("decrement")

botonAbajo.addEventListener("click", () => {
    count--
    document.getElementById("counter").textContent = count
})*/

let buttons = document.querySelectorAll(".btn")
console.log( buttons )

buttons.forEach( button => {
    //console.log( button )
    button.addEventListener("click", ( event ) => {
        console.log( event )
        console.log( event.target )
        console.log( event.target.id )
        //console.log("button")
        let elementId = event.target.id

        elementId === "increment" ? count++ : count--
        document.getElementById("counter").textContent = count
     } )
})




let headerInput = document.getElementById("header-input")

headerInput.addEventListener("keyup", (event) => {
    let textValue = event.target.value
    console.log( textValue )
    let header = document.querySelector("form h1")
    header.textContent = textValue
})


let personArray = [
    {
        name:"Ikki",
        lastname:"El pájaro dev"
    },
    {
        name:"Hagen Isaac",
        lastname:"Salinas Corona"
    }
]

personArray.forEach( (person, index) =>  {
    let {name, lastname } = person 
    let personRow = document.createElement("tr")
    //<tr></tr>
    let indexTd = document.createElement("td")
    //<td></td>
    let nameTd = document.createElement("td")
    //<td></td>
    let lastnameTd = document.createElement("td")
    //<td></td>
    let buttonTd = document.createElement("td")

    let nameText = document.createTextNode( name )
    let lastnameText = document.createTextNode( lastname )
    let indexText = document.createTextNode( index + 1 )
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("btn", "btn-warning")

    let buttonText = document.createTextNode("Borrar")
    deleteButton.appendChild(buttonText)

    buttonTd.appendChild(deleteButton)

    indexTd.appendChild(indexText)
    nameTd.appendChild(nameText)
    lastnameTd.appendChild(lastnameText)

    personRow.appendChild( indexTd )
    personRow.appendChild( nameTd )
    personRow.appendChild( lastnameTd )
    personRow.appendChild( buttonTd )

    document.getElementById("person-table").appendChild( personRow )
})

