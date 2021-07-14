let getAdopters = ()=>{
    let adoptersArray = getAllPets();
    let filterResult = [];
    for(const key in adoptersArray){
        //console.log(adoptersArray[key])
        if(adoptersArray[key].adopted){
            filterResult.push(adoptersArray[key])
        }
    }
    console.log(filterResult);
    printAdopters(filterResult);
}
let printAdopters = function(adopted){
    $(".adopters-profile").html("")
    adopted.forEach(element => {
        let { picture,adoptersname ="",address="",phone ="",adopted=false, adopterImage = ""} = element
        let petHtml = `
        <div class="col-12 col-md-6 mb-4">
        <div class="card pet-card">
            <img src=${adopterImage} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${adoptersname}</h5>
                <p class="card-text">Direccion: ${address}</p>
                <p class="card-text">Telefono: ${phone}</p>
            </div>
            </div>
            </div>
        `
        $(".adopters-profile").append(petHtml)
            
    });
}
getAdopters();