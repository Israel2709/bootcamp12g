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
    band: "Poets of the Fall",
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

const getBands = ( arrayAiterar ) => {
  let bandsList = []
  arrayAiterar.forEach( ( item ) => {
    let bandName = item.band.toLowerCase()
    !bandsList.includes( bandName ) && bandsList.push( bandName )

    if( !bandsList.includes( bandName ) ){
      bandsList.push( bandName )
    }

    

  })
  return bandsList
}

//getBands(songsData )

const groupBands = ( arrayAiterar ) => {
  let bandsList = getBands( arrayAiterar )
  console.log( bandsList)
  let songsGroup = {}


  bandsList.forEach( band => {
    console.log(band)
    console.log( band.toLowerCase().replaceAll(" ","_") )
    songsGroup[band.toLowerCase().replaceAll(" ","_")] = []
  })
 

  /*arrayAiterar.forEach( song => {
    switch( song.band.toLowerCase() ){
      case "metallica":
        songsGroup.metallica.push(song)
        break
    }
  })*/

  console.log( songsGroup )
}

groupBands( songsData )

/*
  [
    "La canción { cancion } es de { banda} "
  ]
*/

const createLabelsArray = arrayAiterar => {
  let labelsArray = []
  arrayAiterar.forEach( song => {
    let { name, band } = song
    let label = `La canción ${ name} es de ${ band }`
    labelsArray.push( label )
    console.log( label )
  })
  return labelsArray
}

let songLabels = songsData.map( ({band, name} ) => `La canción ${ name } es de ${ band }`)

let result = createLabelsArray( songsData )

console.log( result )

/*
let songLabels = songsData.map( song => {
  let { name, band } = song 
  let label = `La canción ${ name} es de ${ band }`
  return label
})
*/
                          
console.log( songLabels )

const getSongByBand = songsData => {
  console.log( songsData )
  let result = []
  songsData.forEach( song => {
    let { band } = song
    console.log( band )
    band === "Metallica" && result.push( song )
  })
  console.log( result )
  return result
}

/*
let songsByBand = songsData.filter( song => {
    return song.band === "Nirvana"
})*/

let songsByBand = songsData.filter( ({band}) => band === 'Nirvana')

console.log( songsByBand )

//getSongByBand( songsData )