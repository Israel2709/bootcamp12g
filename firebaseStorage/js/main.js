//Creamos una nueva instancia de nuestar db
let database = firebase.database();
//console.log( database )

//creamos una variable que apunte hacia la colección de mascotas de nuestra db
let petsRef = database.ref("/pets")

let usersRef = database.ref("/users")
let memoriesRef = database.ref("/memories")

//Creamos un listener que este al pendiente de cualquier cambio en la referencia "petsRef"
petsRef.on('value', snapshot => {
    console.log(snapshot)
    console.log(snapshot.val())
    let petsCollection = snapshot.val()

    for (pet in petsCollection) {
        let { name } = petsCollection[pet]
        $(".names-wrapper").append(`
            <h1>${name}</h1>
        `)
    }
})

usersRef.on('value', snapshot => {
    console.log(snapshot.val())
})

let userObject = {
    name: "Israel Salinas",
    role: "Front-End Mentor",
    picture: "https://avatars.dicebear.com/api/male/.svg"
}

const saveUser = () => {
    usersRef.push(userObject)
}

let counter = 0
const setUser = () => {
    database.ref(`users/user${counter}`).set({ ...userObject, id: counter })
    counter++
}

//Creamos la variable que guardará el archivo que voy a subir
var file

//extraemos el archivo del form
$("#file").change(event => {
    console.log(event.target.files[0])
    file = event.target.files[0]
})



//Esta es la forma de subir archivos al storage de firebase

// Upload file and metadata to the object 'images/mountains.jpg'

//apuntamos hacia la raíz del storage
var storageRef = firebase.storage().ref();



const uploadFile = () => {

    //creamos una tarea de carga de archivos
    var uploadTask = storageRef.child('memories/' + file.name).put(file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);

                let memoryObject = {
                    picture: downloadURL,
                    title: $("#memory-title").val()
                }

                memoriesRef.push(memoryObject)
            });
        });
}

$("#save-memory").click(uploadFile)

memoriesRef.on('value', snapshot => {
    let memoriesCollection = snapshot.val()
    $(".memories-wrapper").empty()
    for( memory in memoriesCollection ){
        let { title, picture } = memoriesCollection[ memory ]
        $(".memories-wrapper").append(`
        <div class="card" >
            <img src=${picture} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
            </div>
        </div>
        `)
    }
})