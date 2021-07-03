/*
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
*/

let personArray = []

let saveBtn = document.getElementById("save-person")

saveBtn.addEventListener("click", () => {
    let personObject = {}
    let fields = document.querySelectorAll("#person-form input")
    //console.log( fields )
    fields.forEach(field => {
        let property = field.name
        let value = field.value
        console.log(property, value)
        personObject = { ...personObject, [property]: value }
    })
    console.log(personObject)
    personArray.push(personObject)
    console.log(personArray)
    printTable( personArray )
})

const deletePerson = event => {
    let personIndex = event.target.dataset.personIndex
    personArray.splice(personIndex,1)
    printTable( personArray )
}

const printTable = dataToPrint => {
    document.getElementById("person-table").innerHTML = ""
    dataToPrint.forEach((item,index) => {
        let { nombre, apellidos } = item

        let personRow = document.createElement("tr")
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")

        let nameText = document.createTextNode(nombre)
        let lastnameText = document.createTextNode(apellidos)
        let indexText = document.createTextNode(index + 1)
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning")
        deleteButton.dataset.personIndex = index
        deleteButton.addEventListener("click", deletePerson )

        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)

        buttonTd.appendChild(deleteButton)

        indexTd.appendChild(indexText)
        nameTd.appendChild(nameText)
        lastnameTd.appendChild(lastnameText)

        personRow.appendChild(indexTd)
        personRow.appendChild(nameTd)
        personRow.appendChild(lastnameTd)
        personRow.appendChild(buttonTd)

        document.getElementById("person-table").appendChild(personRow)
    })
}