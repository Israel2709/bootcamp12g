//Creamos una nueva instancia de nuestar db
let database = firebase.database();
//console.log( database )

//creamos una variable que apunte hacia la colección de mascotas de nuestra db
let petsRef = database.ref("/pets")

let usersRef = database.ref("/users")

//Creamos un listener que este al pendiente de cualquier cambio en la referencia "petsRef"
petsRef.on('value', snapshot => {
    console.log( snapshot )
    console.log( snapshot.val() )
    let petsCollection = snapshot.val()

    for( pet in petsCollection ){
        let { name } = petsCollection[pet]
        $(".names-wrapper").append(`
            <h1>${name}</h1>
        `)
    }
})

usersRef.on('value', snapshot => {
    console.log( snapshot.val() )
})

let userObject = {
    name:"Israel Salinas",
    role:"Front-End Mentor",
    picture:"https://avatars.dicebear.com/api/male/.svg"
}

const saveUser = () => {
    usersRef.push(userObject)
}

let counter = 0
const setUser = () => {
    database.ref(`users/user${counter}`).set({...userObject, id:counter})
    counter++
}