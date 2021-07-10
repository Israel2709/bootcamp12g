const getComments = () => {
    let response;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response  = JSON.parse( xhttp.responseText );
            console.log( response )
        }
    };
    xhttp.open("GET", "https://blog-12g-default-rtdb.firebaseio.com/comments.json", false);
    xhttp.send();
    return response 
}

const getCommentsByPostKey = postKey => {
    let allComments = getComments()
    let filteredComments = Object.values( allComments ).filter( comment => comment.postKey === postKey )
    console.log( filteredComments )
}

/*let commentsCollection = getComments()*/


document.getElementById("create-post").addEventListener('click', () => {
    let date = new Date()
    let dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    let mm = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    let yyyy = date.getFullYear()
    let creationDate = `${dd}/${mm}/${yyyy}`
    let postObject = { author:"Israel Salinas Martínez", creationDate }

    document.querySelectorAll("#post-form input").forEach( input => {
        let property = input.name
        let value = input.value
        postObject = { ...postObject, [property] : value }
        input.value = ""
       // console.log( postObject )
    })
    savePost( postObject )
})

const savePost = postData => {
    let response;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = xhttp.responseText;
            getPosts()
            //console.log( response )
        }
    };
    xhttp.open("POST", "https://blog-12g-default-rtdb.firebaseio.com/posts.json", true);
    xhttp.send( JSON.stringify(postData) );
    //console.log( response )
}

const getPosts = () => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse( xhttp.responseText );
            //console.log( response )
            printPosts( response )
        }
    };
    xhttp.open("GET", "https://blog-12g-default-rtdb.firebaseio.com/posts.json", true);
    xhttp.send();
}

 



const printPosts = dataToPrint => {
    let comments = getComments()
    let postsContent = Object.keys(dataToPrint).reduce( (accum, key) => {
        let postData = dataToPrint[key]

        let postComments = Object.values( comments ).filter( comment =>  comment.postKey === key)
        //console.log( postComments )

        let commentsHtml = postComments.reduce( (accum, comment) => {
            return accum + `<li class="list-group-item">${comment.content}</li>`
        }, "")

        console.log( commentsHtml )

        let { title, cover, content, author, category, creationDate } = postData
        
        let cardHtml = `
            <div class="col-12 col-md-6">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src=${cover} alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${content}</p>
                                <p class="card-text"> <small class="text-muted">@${author}</small></p>
                                <p class="card-text d-flex justify-content-end"> <small class="text-muted">${creationDate}</small></p>
                                <button class="btn btn-dark" data-post-key=${key}>Ver post</button>
                            </div>
                        </div>
                        <div class="col-12">
                            <form class="comment-form">
                                <div class="form-group d-flex">
                                    <input class="form-control">
                                    <button class="btn btn-secondary submit-comment" data-post-key=${key}>Comentar</button>
                                </div>
                                <ul class="list-group">${commentsHtml}</ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `
        return accum + cardHtml
    },"")
    console.log( postsContent )


    document.getElementById("posts-wrapper").innerHTML = postsContent


    document.querySelectorAll(".submit-comment").forEach( button => {
        button.addEventListener("click", (event) => {
            event.preventDefault()
            let postKey = event.target.dataset.postKey
            let content = event.target.previousElementSibling.value
            console.log( content )
            let commentObject = { content, author:"Iván Díaz", postKey}
            saveComment( commentObject, postKey )
        })
    })
}

const saveComment = (commentData, postKey) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText;
            let commentId = JSON.parse(response)
            //console.log( response )
        }
    };
    xhttp.open("POST", "https://blog-12g-default-rtdb.firebaseio.com/comments.json", true);
    xhttp.send( JSON.stringify(commentData) );
}



getPosts()