let count = 0;

/*let botonArriba = document.getElementById("increment")

botonArriba.addEventListener("click", () => {
    console.log("click")
    count++

    document.getElementById("counter").textContent = count
    console.log( count )
})

let botonAbajo = document.getElementById("decrement")

botonAbajo.addEventListener("click", () => {
    count--
    document.getElementById("counter").textContent = count
})*/

let buttons = document.querySelectorAll(".btn")
console.log( buttons )

buttons.forEach( button => {
    //console.log( button )
    button.addEventListener("click", ( event ) => {
        console.log( event )
        console.log( event.target )
        console.log( event.target.id )
        //console.log("button")
        let elementId = event.target.id

        elementId === "increment" ? count++ : count--
        document.getElementById("counter").textContent = count
     } )
})




let headerInput = document.getElementById("header-input")

headerInput.addEventListener("keyup", (event) => {
    let textValue = event.target.value
    console.log( textValue )
    document.querySelector("form h1").textContent = textValue
})