let songsData = [
    {
    name: "Kashmir",
    band: "Led Zeppelin",
    releaseYear: "1980",
    statistics: {
        likes: 20000,
        reproductions: 8000,
        }
    },
    {
    name: "Smells Like Teen Spirit",
    band: "Nirvana",
    releaseYear: "1989",
    statistics: {
        likes: 25000,
        reproductions: 100000,
        }
    }, {
    name: "So What",
    band: "Metallica",
    releaseYear: "1990",
    statistics: {
        likes: 12000,
        reproductions: 95000,
        }
    }, {
    name: "Nothing Else Matters",
    band: "Metallica",
    releaseYear: "1992",
    statistics: {
        likes: 128000,
        reproductions: 915000,
        }
    }, {
    name: "Daze",
    band: "Poets of the fall",
    releaseYear: "2014",
    statistics: {
        likes: 3548413,
        reproductions: 87095138,
        }
    }, {
    name: "The Sweet Scape",
    band: "Poets of the fall",
    releaseYear: "2018",
    statistics: {
        likes: 26268856,
        reproductions: 2424568,
        }
    }
]

/*{
    metallica:[
        {...}
    ],
    Poets of the fall:[
        {....}
    ]
}*/

const orderByBand = dataArray => {
    let orderedObject = dataArray.reduce( ( accum, current ) => {
        let bandName = current.band
        let capitalizedBandName = stringToCamelCase( bandName )
        console.log( capitalizedBandName )

        return !accum[capitalizedBandName] 
            ? {...accum, [capitalizedBandName]:[ current ]} /*cuando no hay propiedad*/
            : {...accum, [capitalizedBandName]:[...accum[capitalizedBandName], current]} /*cuando la propiedad ya existe*/
    },{})
    return orderedObject
}

const stringToCamelCase = string => {
    let camelCased = string.split(" ").reduce( ( accum, current,index ) => {
        let string = current.toLowerCase()
        let capitalized = string[0].toUpperCase() + string.substring(1)
        return index !== 0 ? accum + capitalized : accum + string
    },"")
    console.log( camelCased )
    return camelCased
}

orderByBand(songsData)
