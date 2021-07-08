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
    console.log( dataToPrint )
    console.log( Object.keys( dataToPrint ))
    console.log( Object.values( dataToPrint ))
    let postsContent = Object.keys(dataToPrint).reduce( (accum, current) => {
        let postData = dataToPrint[current]
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
                                <button class="btn btn-dark" data-post-key=${current}>Ver post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
        return accum + cardHtml
    },"")
    console.log( postsContent )
    document.getElementById("posts-wrapper").innerHTML = postsContent
}

getPosts()