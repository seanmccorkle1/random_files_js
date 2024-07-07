let array = []

let author="carroll"
let year = 2009

while (year <= 2023){
  array.push(author +" " + year)
  year++
}

array  = array.map(author => `"${author}"`)

let searchString ="(" +array.join(" OR ") +")"
console.log(searchString)