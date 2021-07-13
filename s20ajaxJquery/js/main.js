const printDivisibles = () => {
    let limit = $("#limit").val()
    let divisor = $("#divisor").val()

    for( let i = 0; i < limit; i++){
        i % divisor === 0 && printCard( i )
    }
   
    $(".number-card").click( ( event ) => {
        let result = 1
        event.stopPropagation()
        console.log( event.target)
        $(event.target).toggleClass("active")
        $(".active").each( function(index){
            console.log( index )
            console.log( $(this).find("h1").text() )
            let value = parseInt($(this).find("h1").text())
            console.log( value )
            result *= value 
        })
        console.log( result )

        let activeCards = document.querySelectorAll(".active h1")
        activeCards.forEach( card => {
            let value = parseInt(card.text)
            result *= value
        })

    })
   
}

const printCard = number => {
    let cardHtml = `
        <div class="col-3">
            <div class="card number-card">
                <div class="card-body d-flex justify-content-center align-items-center">
                    <h1>${number}</h1>
                </div>
            </div>
        </div>
    `
    $("#card-wrapper").append(cardHtml)
}

$("#go").click( printDivisibles )


$(".element").toggleClass("d-none")

document.querySelectorAll(".element").forEach( element => {
    element.classList.includes("d-none") ? element.classList.remove("d-none") : element.classList.add("d-none")
})

let someObject = {
    "name":"israel Salians Martinez",
    "phone":"5543788096"
}

console.log( someObject )
console.log( `some Object`, someObject )
console.log( someObject )



objeto = {
    "key":{
        "name":"asdfasd",
        "lastname":"asdfadvasd"
    }
}

const bringPosts = (endpoint)=> {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        let myArr = []
        if (this.readyState == 4 && this.status == 200) {
            let objeto = JSON.parse(this.responseText);
            for(let property in objeto){
                // Imprimimos el objeto pero este regresa en string como object
                console.log(`${property}: ${objeto[property]}`);
                //Aqui al entrar a un arreglo, el objeto regresa completo
                myArr.push(objeto[property]);
            }
            //console.log(JSON.parse(this.responseText));
            console.log(myArr);
        }
    };

    xhttp.open("GET", endpoint, true);
    xhttp.send();
}


bringPosts(endpoint)
