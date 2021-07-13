const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/israel'

const url = new URL(window.location.href)

let param = url.searchParams.get("mascota")
console.log(param)
console.log(url)

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

const printSelected = (someId) => {
    let mascota = getPetById(someId)
    let { name, specie, age, picture } = mascota

    let mascotaHtml = `<div class="card" style="width: 18rem;">
    <img src="${picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${specie}</li>
      <li class="list-group-item">${age}</li>
    </ul>
  </div>`

  $(".pets-wrapper").append(mascotaHtml)

}

printSelected(param)
