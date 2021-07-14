let searchParams = new URLSearchParams(window.location.search)
//Obtiene el valor pet key de la url.
const petKeyParam = searchParams.get('adoptKey')
const pet = getPetById(petKeyParam);
console.log(petKeyParam)
console.log(pet)
let updateCard = (pet)=>{
    let { name, specie, age, picture,adoptersname ="",address="",phone ="",adopted=false,adopterImage = ""} = pet
    $(".pet-profile").html("")
    let petHtml = `
    <div class="col-12 col-md-6 mb-4">
    <div class="card pet-card">
    <img src=${picture} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">Especie: ${specie}</p>
            <p class="card-text">Edad: ${age}</p>
            <p class="card-text">Adoptado: ${adopted}</p>
            <p class="card-text">Nombre de Adoptante: ${adoptersname}</p>
            <p class="card-text">Direccion: ${address}</p>
            <p class="card-text">Telefono: ${phone}</p>
            <div>
            <img src=${adopterImage} class="card-img-top" alt="...">
            </div>
        </div>
        </div>
        </div>
    `
    $(".pet-profile").append(petHtml)

}


$("#adopt-pet").click((event) => {

    let adopterObject= {};
        $("#adopt-form input").each( function(){
            let property = $(this).attr("name")
            let value = $(this).val()
            adopterObject = {...adopterObject, [property] : value }
        })
        adopterObject = {...adopterObject, ["adopted"] : true }
        console.log(adopterObject)
        patchPet(petKeyParam,adopterObject)
        
        updateCard(getPetById(petKeyParam))
        //agrege esta redireccion para volver a la vista de mascotas para adoptar
        //window.location.href=`disponibles.html`
        
})

updateCard(pet)