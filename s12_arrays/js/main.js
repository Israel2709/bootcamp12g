let someArray = []
console.log( someArray )

//.push() agrega uno o más elmeentos al final de un array y devuelve la nueva longitud del array 

someArray.push("Misael","Jesús","Xoch", "Mike", "Jon")

console.log( someArray )

//.pop() remueve el último elemento de un array, y devuelve el item removido

someArray.pop()
console.log( someArray )

//.shift()  remueve el primer elemento de un array, y devuelve el item removido

someArray.shift()
console.log( someArray )

//.splice(index, howmany, items...)

someArray.splice(1,1,"Bulmaro","Antonio")
console.log( someArray )

/*
    crear una función que permita indicar la cantidad de koders a guardar, que pida tantos nombres de koders como se indique, y al final imprima el nombre del koder y su número asignado 

    Input:"Karen", "Xoch", "Wendy"
    output:
    Koder 1:"Karen",
    Koder 2:"Xoch",
    Koder 3:"Wendy"
*/