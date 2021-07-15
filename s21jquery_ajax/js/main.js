//https://blog-12g-default-rtdb.firebaseio.com/.json

//Equipo 3
/*
3.- Crear avisos para el CRUD ( mostrar un aviso cuando una mascota se guarde exitosamente, y mostrar un aviso cuando se vaya a borrar una mascota --bootstrap modal-- )
*/

const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'
let arraySpecies = []; 

$(document).ready(function() {
    $('.select2').select2();
});

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
        if(value === "" || value === null){
            $(this).addClass("is-invalid");
        }
        console.log(property, value )
        petObject = {...petObject, [property] : value }
    })
    console.log( petObject )
   var checkValidate =  $("#pet-form .is-invalid");
   if(checkValidate==0){
    savePet( petObject )
    printAllPets( getAllPets() )
}else{
    console.log("No procesado por datos inválidos en form")
}
})

const displaySelected = (someId) => {
    let mascota = getPetById(someId)
    let { name, specie, age, picture } = mascota
   

    $("#modal-detail").empty()   
    $(".modal-title").html(name)
    
    let mascotaHtml = `
    <div class="card pet-card">
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
        let { name, specie, age, picture, adopted} = petsData[pet]
        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
        <a href = "vista.html?mascota=${pet}" target = "_blank" > <img src=${picture} class="card-img-top" alt="..."> </a>
            <div class="card-body">
                <h5 class="card-title"><img class="pr-1" style="width: 18px; height: 15px;" src="./img/paw.png" alt="paw">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <button type="button" class="btn btn-primary btnDetalle" data-pet-key=${pet} data-toggle="modal" data-target="#exampleModal ">Detalle</button>
                <button type="button" class="btn btn-danger btn-delete" data-pet-key=${pet}>Borrar</button>
                ${!adopted ? `<a href="adoptForm.html?adoptKey=${pet}" class="btn btn-success adopt" data-pet-key=${pet}>Adoptame</a>`:''}
            </div>
            </div>
            </div>
        `
       specie!==undefined?fillSelectSpecies(specie):console.log('especie rechazada',specie);
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
            $("#modalLongTitle").text("¡Mascota borrada!")
            $("#modalBody").text("Se ha borrado una mascota.")
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

$("#specie-filter").change(function() {
    let filterOption = $("#specie-filter").val();
    petsCollection = getAllPets()
     console.log( petsCollection )
    console.log( filterOption )

    let filterResult = Object.keys(petsCollection).reduce( ( accum, current ) => {
        let petObject = petsCollection[current]
        return petObject.specie && petObject.specie.toLowerCase() === filterOption.toLowerCase() ? {...accum,[current]:petObject } : accum
    },{})
    console.log(filterResult)
    printAllPets(filterResult)
})

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


 function fillSelectSpecies(specie){   
   specieCap=capitalize(specie.toLowerCase());
   console.log('especie capitalizada',specieCap)
   console.log('lenght', arraySpecies.length)
   if(arraySpecies.length>0){
       if(!arraySpecies.includes(specieCap)){
           arraySpecies.push(specieCap)
           console.log('specieInconming', specieCap);
            $("#specie-filter").append(`<option value="${specieCap}">${specieCap}</option>`) 
            $("#specie-select").append(`<option value="${specieCap}">${specieCap}</option>`) 
        }}else{ 
            $("#specie-select").append(`<option value="${specieCap}">${specieCap}</option>`) 
            $("#specie-filter").append(`<option value="${specieCap}">${specieCap}</option>`) 

        arraySpecies.push(specieCap);

         console.log('first data array generated', arraySpecies);
       }
   }
    

let petsCollection = getAllPets()
printAllPets( petsCollection )

//agregamos el listener al boton de disponibles
$('.disponibles').click(function(){
    location.href = "disponibles.html"
})

