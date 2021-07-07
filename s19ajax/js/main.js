const endpoint = "https://apikoder-b2ce0-default-rtdb.firebaseio.com/angel1/.json"

let personArray = []


const savePerson = (nombre, apellido) => {
    // Preparando el payload
    const personJavascript = {nombre, apellido}
    const personJson = JSON.stringify(personJavascript)

    // Creando el objeto
    var xhttp = new XMLHttpRequest();

    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            getPersons()
        }

    };

    // Configurar el verbo, la dirección
    xhttp.open("POST", endpoint, true);

    // Enviar la solicitud
    xhttp.send(personJson);
}


const getPersons = () => {

    // Creando el objeto
    var xhttp = new XMLHttpRequest();

    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(xhttp.responseText)
            const respuesta = JSON.parse(xhttp.responseText);
            //console.log({respuesta}) //  {respuesta: respuesta}
            let mentores = []
            for ( mentorKey in respuesta){
                let newMentor = {
                    id: mentorKey, // key
                    nombre: respuesta[mentorKey].nombre,
                    apellidos:  respuesta[mentorKey].apellido
                }
                mentores.push(newMentor)
            }
            printTable( mentores )
        }
    };

    // Configurar el verbo, la dirección
    xhttp.open("GET", endpoint, true);

    // Enviar la solicitud
    xhttp.send();
}
getPersons()

let saveBtn = document.getElementById("save-person")

saveBtn.addEventListener("click", () => {
    let personObject = {}
    let fields = document.querySelectorAll("#person-form input")
    //console.log( fields )
    fields.forEach(field => {
        let property = field.name
        let value = field.value
        personObject = { ...personObject, [property]: value }
        field.value = ''
    })


    savePerson(personObject.nombre, personObject.apellido)
})


const updatePerson = event => {
    let personIndex = event.target.dataset.personIndex

    let personObject = {}
    let fields = document.querySelectorAll("#person-form input")
    //console.log( fields )
    fields.forEach(field => {
        let property = field.name
        let value = field.value
        if (field.value !== ''){
            personObject = { ...personObject, [property]: value }
        }
        field.value = ''
    })
    console.log({personObject})
    const personJson = JSON.stringify(personObject)

    // Creando el objeto
    var xhttp = new XMLHttpRequest();
    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            getPersons()
        }
    };
    // Configurar el verbo, la dirección
    const endpoint = `https://apikoder-b2ce0-default-rtdb.firebaseio.com/angel1/${personIndex}.json`
    
    xhttp.open("PUT", endpoint, true);

    // Enviar la solicitud
    xhttp.send(personJson);
}


const deletePerson = event => {
    let personIndex = event.target.dataset.personIndex

    // Creando el objeto
    var xhttp = new XMLHttpRequest();

    // Configurando qué va a pasar cuando recibamos respuesta
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const respuesta = xhttp.responseText;
            getPersons()
        }
    };
    // Configurar el verbo, la dirección
    const endpoint = `https://apikoder-b2ce0-default-rtdb.firebaseio.com/angel1/${personIndex}.json`
    
    xhttp.open("DELETE", endpoint, true);

    // Enviar la solicitud
    xhttp.send();
}

const printTable = dataToPrint => {
    document.getElementById("person-table").innerHTML = ""
    dataToPrint.forEach((item, index) => {
        let { nombre, apellidos, id } = item

        let personRow = document.createElement("tr")
        //<tr></tr>
        let indexTd = document.createElement("td")
        //<td></td>
        let nameTd = document.createElement("td")
        //<td></td>
        let lastnameTd = document.createElement("td")
        //<td></td>
        let buttonTd = document.createElement("td")

        let indexText = document.createTextNode(index+1)
        let nameText = document.createTextNode(nombre)
        let lastnameText = document.createTextNode(apellidos)

        // Botón para borrar
        let deleteButton = document.createElement("button")
        deleteButton.classList.add("btn", "btn-warning", "mx-2")
        deleteButton.dataset.personIndex = id
        deleteButton.addEventListener("click", deletePerson )
        let buttonText = document.createTextNode("Borrar")
        deleteButton.appendChild(buttonText)

        // Botón para actualizar
        let updateButton = document.createElement("button")
        updateButton.classList.add("btn", "btn-primary", "mx-2")
        updateButton.dataset.personIndex = id
        updateButton.addEventListener("click", updatePerson )
        let updateButtonText = document.createTextNode("Update")
        updateButton.appendChild(updateButtonText)


        buttonTd.appendChild(deleteButton)
        buttonTd.appendChild(updateButton)

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