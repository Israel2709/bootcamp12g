/*usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-crear un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/
var mentorsArray = [
  {
    name: "Israel Salinas Martinez",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 8
      },
      {
        signature: "ReactJS",
        score: 8
      }
    ]
  },
  {
    name: "David Cermeño Moranchel",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 7
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  },
  {
    name: "Charles Silva",
    scores: [
      {
        signature: "HTML",
        score: 9
      },
      {
        signature: "CSS",
        score: 9
      },
      {
        signature: "JS",
        score: 10
      },
      {
        signature: "ReactJS",
        score: 9
      }
    ]
  },
  {
    name: "Michael Villalba Sotelo",
    scores: [
      {
        signature: "HTML",
        score: 8
      },
      {
        signature: "CSS",
        score: 10
      },
      {
        signature: "JS",
        score: 9
      },
      {
        signature: "ReactJS",
        score: 10
      }
    ]
  }
]

const getMentorsScores = mentors => {
  let mentorsQty = mentors.length
  let htmlTotal = 0;
  let cssTotal = 0;
  let jsTotal = 0;
  let reactTotal = 0;
  mentors.forEach(mentor => {
    // console.log( mentor.scores )
    let scores = mentor.scores
    scores.forEach(score => {
      let signature = score.signature
      // console.log( 'signature', signature )
      let value = score.score
      // console.log( 'value', value)
      switch (signature) {
        case 'HTML':
          htmlTotal += value
          break

        case 'CSS':
          cssTotal += value
          break

        case 'JS':
          jsTotal += value
          break

        case 'ReactJS':
          reactTotal += value
          break

        default:
        // console.log("Asignatura no registrada")
      }
    })
  })
  let htmlAverage = htmlTotal / mentorsQty
  let cssAverage = cssTotal / mentorsQty
  let jsAverage = jsTotal / mentorsQty
  let reactAverage = reactTotal / mentorsQty
  // console.log( htmlAverage )
  // console.log( cssAverage )
  // console.log( jsAverage )
  // console.log( reactAverage )

  return { htmlAverage, cssAverage, jsAverage, reactAverage }
}

const getMentorAverage = scoresArray => {
  let scoreTotal = 0;
  let signaturesQty = scoresArray.length
  scoresArray.forEach(mentorScore => {
    let value = mentorScore.score
    scoreTotal += value
  })
  let mentorAverage = scoreTotal / signaturesQty
  // console.log('promedio del mentor:', mentorAverage )
  return mentorAverage
}

const createLabelsArray = mentorsData => {
  let labelsArray = []
  mentorsData.forEach(mentor => {
    let mentorName = mentor.name
    let mentorAverage = getMentorAverage(mentor.scores)
    console.log('name ', mentorName, 'average ', mentorAverage)
    let label = `Hola, soy ${mentorName} y mi promedio es de ${mentorAverage}`
    labelsArray.push(label)
  })
  console.log(labelsArray)
  return labelsArray
}

const getHighestAverages = mentorsData => {
  let highestsAverages = []
  mentorsData.forEach(mentor => {
    let average = getMentorAverage(mentor.scores)
    console.log(average)

    average > 9 && highestsAverages.push(mentor)
  })
  console.log(highestsAverages)
  return highestsAverages
}

getHighestAverages(mentorsArray)

createLabelsArray(getHighestAverages(mentorsArray))

//createLabelsArray( mentorsArray )

//getMentorsScores( mentorsArray )




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

/*agrupar únicamente los nombres de las bandas, sin repeticiones*/

/*
  Agrupar las canciones de cada banda
*/

/*
  saber cuál es la canción con más likes
  ( nombre de la canción y nombre de la banda)
  */

/*saber cuál es la canción con más reproducciones
( nombre de la canción y nombre de la banda)
*/