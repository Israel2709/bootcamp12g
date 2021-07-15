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
let arrayFrases = ["...Cuando un hombre se apiade de todas las criaturas vivientes, sólo entonces será noble. (Buda)..." , 
"...La grandeza de una nación y su progreso moral puede ser juzgado por la forma en que sus animales son tratados. (Gandhi)...", 
"...Hasta que uno no ha amado a un animal, parte de su alma permanece dormida. (France, Anatole)...", 
"...El peor pecado que cometemos contra nuestros amigos las animales no es odiarlos, es ser indiferentes con ellos. Esa es la esencia de lo inhumano. (George Bernard Shaw)...."]
const getFrase = () => {
    let i = Math.floor(Math.random() * (0 - arrayFrases.length)) + arrayFrases.length
    return   arrayFrases[i]
}
const printSelected = (someId) => {
    let mascota = getPetById(someId)
    let { name, specie, age, picture } = mascota
    name = name.charAt(0).toUpperCase() + name.substring(1)
    specie = specie.charAt(0).toLowerCase() + specie.substring(1)
    let mascotaHtml = `<div class="card div-style pet-style">
    <div class="h1-element">
    <h1>Conoce a ${name}</h1>
    <img src="${picture}" class="card-img-top" alt="...">
    </div>
    <div class="card-body p-detail">
      <h4>${name} es un ${specie} que tiene ${age}</h4>
      <p>Nuestro centro se dedica a rescatar animales que se encontraron abandonados. Es nuestra mision cuidar de ellos y encontrarles el mejor hogar possible.</p>
      <p class="card-title ">${getFrase()}</p>
  </div>`
  $(".pets-wrapper").append(mascotaHtml)
}
printSelected(param)
$('#cerrar').click(  ()=>{
    window.close()
})
console.log(getFrase())