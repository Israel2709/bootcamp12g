//Creamos una constante con la url base de nuestro endpoint
const BASE_URL = 'https://blog-12g-default-rtdb.firebaseio.com/'

//Petición para traer todos los posts
const getAllPost = () => {
    let response
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(xhttp.responseText)
        }
    };
    xhttp.open("GET", `${BASE_URL}/posts.json`, false)
    xhttp.send()
    return response
}

//Petición para traer todos los comentarios
const getAllComments = () => {
    let response
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(xhttp.responseText)
        }
    };
    xhttp.open("GET", `${BASE_URL}/comments.json`, false)
    xhttp.send()
    return response
}

//Petición para traer un post por id
const getPostById = postId => {
    let response
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(xhttp.responseText)
        }
    };
    xhttp.open("GET", `${BASE_URL}/posts/${postId}.json`, false)
    xhttp.send()
    return response
}

//Petición para traer un comment por id
const getCommentById = commentId => {
    let response
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = JSON.parse(xhttp.responseText)
        }
    };
    xhttp.open("GET", `${BASE_URL}/comments/${commentId}.json`, false)
    xhttp.send()
    return response
}

let allposts = getAllPost()
console.log( allposts )

let allcomments = getAllComments()
console.log( allcomments )

let singlePost = getPostById('-Me2bGYB75kNHSmcxY5y')
console.log( singlePost )

let singleComment = getCommentById('-Me2xH-PfkYs9q4KLLMi')
console.log( singleComment )

//Petición para traer todos los comments de un post específico
let getCommentsByPostKey = postKey => {
    let allComments = getAllComments()
    let result = Object.values( allComments ).filter( comment => comment.postKey === postKey )
    return result
}

//Petición para guardar un post, devuelve el id del post creado
const savePost = postData => {
    let postId;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            postId = JSON.parse(xhttp.responseText).name
        }
    };
    xhttp.open("POST", `${BASE_URL}/posts.json`, true);
    xhttp.send( JSON.stringify( postData ) );
    return postId
}

//Petición para guardar un comment, devuelve el id del comment creado
const saveComment = commentData => {
    let commentId;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            commentId = JSON.parse(xhttp.responseText).name
        }
    };
    xhttp.open("POST", `${BASE_URL}/comments.json`, true);
    xhttp.send( JSON.stringify( commentData ) );
    return commentId
}