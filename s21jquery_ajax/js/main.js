//https://blog-12g-default-rtdb.firebaseio.com/.json

//Equipo 2
/*
3.- Crear avisos para el CRUD ( mostrar un aviso cuando una mascota se guarde exitosamente, y mostrar un aviso cuando se vaya a borrar una mascota --bootstrap modal-- )
*/

const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'
const savePet = petData => {
    $.ajax({
        method:"POST",
        url:`${BASE_URL}/pets.json`,
        data:JSON.stringify( petData ),
        success: response => {
            $("#modalLongTitle").text("Enhorabuena!")
            $("#modalBody").text("Se ha agregado una mascota nueva!")
            $("#btn-dismiss").text("Ok").addClass("btn-primary").removeClass("btn-secondary")
            $("#btn-confirm").addClass("d-none")
            $("#modalCenter").modal('show')
            console.log( response )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
}

const getAllPets = () => {
    let result
    $.ajax({
        method:"GET",
        url:`${BASE_URL}/pets.json`,
        success: response => {
            result = response
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}

const getPetById = petId => {
    let result
    $.ajax({
        method:"GET",
        url:`${BASE_URL}/pets/${petId}.json`,
        success: response => {
            result = response
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}

$("#save-pet").click(() => {
    let petObject = {}
    $("#pet-form input").each( function(){
        let property = $(this).attr("name")
        let value = $(this).val()
        console.log(property, value )
        petObject = {...petObject, [property] : value }
    })
    console.log( petObject )
    savePet( petObject )
    printAllPets()
})

const printAllPets = () => {
    $(".pets-wrapper").empty()
    let allPets = getAllPets()
    for( pet in allPets ){
        let { name, specie, age, picture } = allPets[pet]

        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
            <img src=${picture} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <a href="#" class="btn btn-primary" data-pet-key=${pet}>Go somewhere</a>
                <button type="button" class="btn btn-danger btn-delete" data-pet-key=${pet}>Borrar</button>
            </div>
            </div>
            </div>
        `
        $(".pets-wrapper").append(petHtml)
    }

    $(".btn-delete").click(evento => {
        $("#modalLongTitle").text("Advertencia")
        $("#modalBody").text("Seguro que desear eliminar una mascota?")
        $("#btn-dismiss").text("Cancelar").addClass("btn-secondary")
        $("#btn-confirm").text("Borrar").removeClass("d-none").addClass("btn-danger")
        $("#modalCenter").modal('show')
        let petID = evento.target.dataset.petKey
        //console.log(evento.target.dataset.petKey);

        $("#btn-confirm").click( () => { 
            removePet(petID)
        })
        
    })
}

const removePet = petId => {
    let result
    $.ajax({
        method:"DELETE",
        url:`${BASE_URL}/pets/${petId}.json`,
        success: response => {
            result = response
            console.log("Mascota borrada");
            //$("#modalCenter").modal('hide')

            $("#modalLongTitle").text("Mascota borrada")
            $("#modalBody").text("Se ha borrado una mascota")
            $("#btn-dismiss").text("Ok").addClass("btn-primary").removeClass("btn-secondary")
            $("#btn-confirm").addClass("d-none")
            printAllPets()
            //$("#modalCenter").modal('show')

        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}


//Imprimimos todas las mascotas desde el principio
printAllPets()