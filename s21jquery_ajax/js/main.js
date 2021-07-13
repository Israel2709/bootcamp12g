//https://blog-12g-default-rtdb.firebaseio.com/.json

const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'
const savePet = petData => {
    $.ajax({
        method:"POST",
        url:`${BASE_URL}/pets.json`,
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
        console.log(allPets[pet]);
        let { name, specie, age, picture,adopted} = allPets[pet]
        
        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
            <img src=${picture} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">Especie: ${specie}</p>
                <p class="card-text">Edad: ${age}</p>
                <a href="#" class="btn btn-primary" data-pet-key=${pet}>Adoptame</a>
            </div>
            </div>
            </div>
        `
        if(allPets[pet].hasOwnProperty('adopted')){
            if(adopted=="false"){
                $(".pets-wrapper").append(petHtml)
            }
        }
        
            
    }
}

//Imprimimos todas las mascotas desde el principio
printAllPets()