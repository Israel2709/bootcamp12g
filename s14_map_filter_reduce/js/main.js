/* usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )

-Obtener el promedio individual de cada mentor

-Obtener la lista de mentores cuyo promedio sea mayor a 9.5 

-crear un array de strings con la siguiente forma:
    "Mi nombre es {nombre} y mi promedio es de {promedio}"
*/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

const createLabelsArray = dataArray => {
  let labelsArray = dataArray.map( item => {
      let { name } = item
      return `Mi nombre es ${ name } y mi promedio es de {promedio}`
  })
  return labelsArray
}

console.log( createLabelsArray( mentorsArray ) )

const getMentorNamesArray = dataArray => {
  let mentorsNames = dataArray.map( 
    item => {
    return item.name
  })
  return mentorsNames
}


const getBestAtHtml = dataArray => {
  let result = dataArray.filter( item => {
    return item.scores[0].score > 8
  })

  return result
}

const getHtmlScores = dataArray => {
  let htmlScores = dataArray.map( item => {
    return item.scores[0].score
  })
  return htmlScores
}

let allMentorsHtmlScores = getHtmlScores( mentorsArray )
let bestMentorsHtmlScores = getHtmlScores( getBestAtHtml( mentorsArray ))

console.log( allMentorsHtmlScores )
console.log( bestMentorsHtmlScores )

////console.log( getBestAtHtml(mentorsArray) )
/*
item: {
  name:"Michael Villalba Sotelo",
  scores:[
      {
          signature:"HTML",
          score:8
      },
      {
          signature:"CSS",
          score:10
      },
      {
          signature:"JS",
          score:9
      },
      {
          signature:"ReactJS",
          score:10
      }
  ]
}*/

console.log( getMentorNamesArray( mentorsArray ) )