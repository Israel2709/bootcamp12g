//https://blog-12g-default-rtdb.firebaseio.com/.json

//Equipo 3
/*
3.- Crear avisos para el CRUD ( mostrar un aviso cuando una mascota se guarde exitosamente, y mostrar un aviso cuando se vaya a borrar una mascota --bootstrap modal-- )
*/

const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'

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
    console.log(result)
    return result
}

const savePet = petData => {
    $.ajax({
        method:"POST",
        url:`${BASE_URL}/pets.json`,
        data:JSON.stringify( petData ),
        success: response => {
            $("#modalLongTitle").text("Enhorabuena!")
            $("#modalBody").text("Se ha agregado una mascota nueva!")
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

const patchPet = (petId, petData) => {
    $.ajax({
        method:"PATCH",
        url:`${BASE_URL}/pets/${petId}.json`,
        data:JSON.stringify( petData ),
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
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
    let petObject = {adopted:false}
    $("#pet-form input").each( function(){
        let property = $(this).attr("name")
        let value = $(this).val()
        console.log(property, value )
        petObject = {...petObject, [property] : value }
    })
    console.log( petObject )
    savePet( petObject )
    printAllPets( getAllPets() )
})

const displaySelected = (someId) => {
    let mascota = getPetById(someId)
    let { name, specie, age, picture } = mascota
   

    $("#modal-detail").empty()   
    $(".modal-title").html(name)
    
    let mascotaHtml = `
    <div class="card pet-card2" style="width: 18rem;">
    <img src="${picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Nombre: ${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Especie: ${specie}</li>
      <li class="list-group-item">Edad: ${age}</li>
    </ul>
  </div>`
  console.log(mascotaHtml)
  $("#modal-detail").append(mascotaHtml)

}


const printAllPets = petsData => {
    $(".pets-wrapper").empty()
    for( pet in petsData ){
        let { name, specie, age, picture} = petsData[pet]
        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
        <a href = "vista.html?mascota=${pet}" target = "_blank" > <img src=${picture} class="card-img-top" alt="..."> </a>
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <button type="button" class="btn btn-primary btnDetalle" data-pet-key=${pet} data-toggle="modal" data-target="#exampleModal ">Detalle</button>
                <button type="button" class="btn btn-danger btn-delete" data-pet-key=${pet}>Borrar</button>
                <a href="adoptForm.html?adoptKey=${pet}" class="btn btn-success adopt" data-pet-key=${pet}>Adoptame</a>
            </div>
            </div>
            </div>
        `
        $(".pets-wrapper").append(petHtml) 
    }

    $('.btnDetalle').click( (event)=>{
        //console.log(event)
        let id = $(event.target).data("pet-key")
        // console.log("id", $(event.target).data("pet-key"))
        displaySelected(id)
    } )

    
    $(".btn-delete").click(evento => {
        $("#deleteModal").modal('show')
        let petID = evento.target.dataset.petKey
        $("#btn-delete-confirm").click( () => { 
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
            $("#deleteModal").modal('hide')
            $("#modalLongTitle").text("Mascota borrada")
            $("#modalBody").text("Se ha borrado una mascota")
            $("#modalCenter").modal('show')
            printAllPets( getAllPets() )
        },
        error: error => {
            console.log( "hay un error ")
            console.log( error )
        },
        async:false
    })
    return result
}

$("#btn-confirm").click( () => {
    $("#modalCenter").modal('hide')
})

$(".filter-radio-set input[type='radio']").click( event => {
    petsCollection = getAllPets()
    let filterOption = $(event.target).val()
    console.log( petsCollection )
    console.log( filterOption )

    let filterResult = Object.keys(petsCollection).reduce( ( accum, current ) => {
        let petObject = petsCollection[current]
        return petObject.specie && petObject.specie.toLowerCase() === filterOption.toLowerCase() ? {...accum,[current]:petObject } : accum
    },{})
    console.log(filterResult)
    printAllPets(filterResult)
})

//Imprimimos todas las mascotas desde el principio
let petsCollection = getAllPets()
printAllPets( petsCollection )

//agregamos el listener al boton de disponibles
$('.disponibles').click(function(){
    location.href = "disponibles.html"
})

