const printDivisibles = () => {
    let limit = $("#limit").val()
    let divisor = $("#divisor").val()

    for( let i = 0; i < limit; i++){
        i % divisor === 0 && printCard( i )
    }
    $(".number-card").click( ( event ) => {
        event.stopPropagation()
        console.log( event.target)
        $(event.target).addClass("active")
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
